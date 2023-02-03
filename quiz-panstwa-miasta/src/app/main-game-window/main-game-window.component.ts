import {Component} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-main-game-window',
  templateUrl: './main-game-window.component.html',
  styleUrls: ['./main-game-window.component.css']
})
export class MainGameWindowComponent {

  private alphabet = 'abcdefghijklmnopqrstuvwxyz'
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


  constructor(private firestore: AngularFirestore) {
    this.gameID = this.generateGameId()
    this.firestoreCollection = firestore.collection('answers');
  }


  getRandomLetter() {
    this.alphabet.split('');
    this.letter = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
    this.letters.push(this.letter);
    return this.letter;
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
    this.getRandomLetter()
  }


  onEndGameClick() {
    this.saveDataToFirestore()
  }

  generateGameId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000000).toString();
  }


}
