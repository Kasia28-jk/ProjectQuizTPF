import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {MainGameWindowComponent} from "./main-game-window/main-game-window.component";
import {FormsModule} from "@angular/forms";
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { ResultWindowComponent } from './result-window/result-window.component'


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterPageComponent,
    MainGameWindowComponent,
    DialogOverviewExampleDialogComponent,
    ResultWindowComponent
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    CoolSocialLoginButtonsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
