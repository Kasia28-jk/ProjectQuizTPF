import {Component} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

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

  ngOnInit(): void {

    this.letter = this.getRandomLetter()
    this.startTimer();
  }


  constructor(private firestore: AngularFirestore,private router: Router) {
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


  saveDataToFirestore() {
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
    this.router.navigateByUrl('result');
  }

  generateGameId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000000).toString();
  }


}
