import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  constructor( private db: AngularFirestore) {}

  getData(){
    return this.db.collection('answers').valueChanges('answers');
  }
}
