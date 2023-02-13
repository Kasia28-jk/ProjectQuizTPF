import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { AuthService, IUser } from '../auth.service';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  nameUser: string;
  nameId: string;
  users: User[];
  codePath: string;
  constructor(private router: Router, public dialog: MatDialog, public authService: AuthService,private route: ActivatedRoute, private userService: UserService) 
  {
    this.getUserName();
  }
  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    this.codePath = params["code"]
    //todo 
    //1.get Code from above link
    //2.save in firestore information about user and code 
    this.userService.createUser({name:"Janek", code: params["code"]})
    //3. get from friestore list of users with such code
    this.userService.users.valueChanges().subscribe((users)=>{
      console.log(users)
      this.users = users
    })
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

  copyLink()
  {
    console.log(this.route.snapshot)
    navigator.clipboard.writeText(this.router.url);
    // https://quiz-panstwa-miasta.web.app//=waitingroom?code=
  }
}
