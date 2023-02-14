import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { DataServiceService } from '../data-service.service';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
@Component({
  selector: 'app-result-window',
  templateUrl: './result-window.component.html',
  styleUrls: ['./result-window.component.css']
})
export class ResultWindowComponent{
  data: any [];
  userId: string;
  users: User[];
  constructor(private router: Router,  private db: AngularFirestore,
     private dataService: DataServiceService,public authService: AuthService) {}
  



  grajPonownie()
  {
    this.router.navigateByUrl('');
  }

  save()
  {
    
  }


}
