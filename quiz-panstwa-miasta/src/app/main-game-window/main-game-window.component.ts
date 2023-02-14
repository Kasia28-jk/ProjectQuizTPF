import {Component} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataServiceService } from '../data-service.service';
import { Answer } from '../models/answer';

@Component({
  selector: 'app-main-game-window',
  templateUrl: './main-game-window.component.html',
  styleUrls: ['./main-game-window.component.css']
})
export class MainGameWindowComponent {

  name: string | undefined;
  email: string | undefined;
  country: any;
  city: any;
  animal: any;
  item: any;
  plant: any;
  river: any;
  gameID: any;
  letter: any;
  letters: string[] = [];
  firestoreCollection : AngularFirestoreCollection;
  timeLeft: number;
  intervalId: any;
  codePath: string;
  answer: Answer = null;
  nameUser: string;
  radnomUser: string;
  userId: string;
  finallUserName: string;
  finallUserId: string;

  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    this.codePath = params["code"]
    this.radnomUser = params["userName"]
    console.log(this.radnomUser)
    this.letter = this.getRandomLetter()
    this.startTimer();

    this.getUserName();
    this.getUserId();
    if(this.nameUser != null)
    {
      this.finallUserId = this.userId 
      this.finallUserName = this.nameUser 
    }
    else
    {
        this.finallUserName = this.radnomUser

        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        const lengthOfCode = 8;
        const hash = this.makeRandom(4, possible)
        this.finallUserId = hash
    }
  }


  constructor(private firestore: AngularFirestore,private router: Router, 
    private route: ActivatedRoute, private dataService: DataServiceService,
    public authService: AuthService) 
  {
    this.gameID = this.generateGameId()
    this.firestoreCollection = firestore.collection('answers');
  }

  startTimer() {
    this.timeLeft = 120;
    this.intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.intervalId);
        this.onEndGameClick()
      }
    }, 1000);
  }


  getRandomLetter(): string {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (this.letters.length === alphabet.length) {
      this.letters = [];
    }

    let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    while (this.letters.includes(randomLetter)) {
      randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    this.letters.push(randomLetter);
    return randomLetter;
  }


  saveDataToFirestoreOLD() {
    this.firestoreCollection.add({
      animal: this.animal,
      city: this.city,
      country: this.country,
      item: this.item,
      plant: this.plant,
      river: this.river,
      gameID: this.gameID,
      letter: this.letter
    })

  }
  
  saveDataToFirestoreWRONG() 
  {
    console.log(this.animal)
    this.answer.animal = this.animal.toString();
    console.log(this.answer.animal)
    this.answer.city = this.city;
    this.answer.country = this.country;
    this.answer.item = this.item;
    this.answer.plant = this.plant;
    this.answer.river = this.river;
    this.answer.gameID = this.gameID;
    this.answer.letter = this.letter;
    this.answer.code = this.codePath;


    this.dataService.createAnswer(this.answer);

  }


  saveDataToFirestore() {
    this.firestoreCollection.add({
      animal: this.animal,
      city: this.city,
      country: this.country,
      item: this.item,
      plant: this.plant,
      river: this.river,
      gameID: this.gameID,
      letter: this.letter,
      code: this.codePath,
      userId: this.finallUserId,
      userName: this.finallUserName
    })

  }

  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }

  

  getUserName()
  {
    this.nameUser = this.authService.getUserName();
    console.log(this.nameUser);
  }

  getUserId()
  {
    this.userId = this.authService.getUserId();
    console.log(this.nameUser);
  }

  onSubmitClick() {
    this.saveDataToFirestore()
    this.animal = ''
    this.city = ''
    this.country = ''
    this.item = ''
    this.plant = ''
    this.river = ''
    this.letter = this.getRandomLetter()
  }


  onEndGameClick() {
    this.saveDataToFirestore();
    const hash = this.codePath
    this.router.navigateByUrl('result?code=' + hash);
  }

  generateGameId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000000).toString();
  }


}
