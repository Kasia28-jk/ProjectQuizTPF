import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider,FacebookAuthProvider  } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
          this.router.navigate(['/cards']);
        } else {
          this.afAuth.signOut();
          this.router.navigate(['/']);
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
}
