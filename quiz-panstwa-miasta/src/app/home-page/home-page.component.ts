import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { AuthService, IUser } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  users: IUser;
  nameUser: string;
  nameId: string;
  constructor(private router: Router, public dialog: MatDialog, public authService: AuthService) 
  {
    this.getUserName();
  }
  login()
  {
    console.log("hey")
    //this.router.navigateByUrl('register');
  }

  start()
  {
    this.router.navigateByUrl('game');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '450px',
    height:'200px' });
  }

  getUserName()
  {
    this.nameUser = this.authService.getUserName();
    console.log(this.nameUser);
  }
}
