import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider,FacebookAuthProvider  } from 'firebase/auth';

export interface IUser
{
  userId: string;
  userName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: IUser;
  idUser: string;
  nameUser: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  FacebookAuth()
  {
      return this.AuthLogin(new FacebookAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        if(result.user) {
          this.router.navigate(['']);
          console.log("hej")
          this.idUser = result.user.uid;
          console.log(this.idUser);
          this.nameUser= result.user.displayName;
          console.log(this.nameUser);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async signOut(): Promise<void> {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  getUserId()
  {
    return this.idUser;
  }

  getUserName()
  {
    console.log(this.nameUser);
    return this.nameUser;
  }
}
