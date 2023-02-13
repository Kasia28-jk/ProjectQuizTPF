import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { DataServiceService } from '../data-service.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-result-window',
  templateUrl: './result-window.component.html',
  styleUrls: ['./result-window.component.css']
})
export class ResultWindowComponent implements OnInit{
  data: any;
  userData: any;
  constructor(private router: Router, private dataService: DataServiceService, private authService: AuthService) {}

  ngOnInit(){
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
      console.log(this.authService.getUserId() + this.authService.getUserName());
    });


    // this.dataService.getUserData().subscribe(userData => {
    //   this.userData = userData;
    //   console.log("User data: " + userData);
    // });



  }

  grajPonownie()
  {
    this.router.navigateByUrl('waitingroom');
  }



  save()
  {

  }


}
