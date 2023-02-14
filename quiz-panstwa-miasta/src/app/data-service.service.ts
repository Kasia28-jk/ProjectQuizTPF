import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Answer } from './models/answer';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private path = '/answers'
  answers : AngularFirestoreCollection<Answer> = null
  constructor( private db: AngularFirestore) {}

  createUser(answer: Answer)
  {
    return this.answers.add(answer);
  }

  getUsersByCode(code: string)
   {
      return this.db.collection(this.path, x =>x
        .where('code','==', code)).valueChanges();
   }
}
