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
export class ResultWindowComponent{
  data: any [];
  userId: string;
  constructor(private router: Router,  private db: AngularFirestore, private dataService: DataServiceService,public authService: AuthService) {}
  



  grajPonownie()
  {
    this.router.navigateByUrl('waitingroom');
  }



  save2()
  {
    this.userId = this.authService.getUserId();
    return this.db.collection('answers', x => x.where("gameID", "==", this.userId)).valueChanges({ idField: 'key'})
  }

  save()
  {
    this.save2().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }


}
