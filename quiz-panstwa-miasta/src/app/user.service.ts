import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path = '/users'
  usersByCode: User[];
  users : AngularFirestoreCollection<User> = null
  constructor(private db: AngularFirestore) {
    this.users = db.collection(this.path)
   }

   createUser(user: User)
   {
      return this.users.add(user);
   }


   getUsersByCode(code: string)
   {
      return this.db.collection(this.path, x =>x
        .where('code','==', code)).valueChanges();
   }
}
