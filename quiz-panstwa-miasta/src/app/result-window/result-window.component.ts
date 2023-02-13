import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-result-window',
  templateUrl: './result-window.component.html',
  styleUrls: ['./result-window.component.css']
})
export class ResultWindowComponent implements OnInit{
  data: any [];
  constructor(private router: Router,  private db: AngularFirestore, private dataService: DataServiceService) {}
  ngOnInit(){
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });

  }

  grajPonownie()
  {
    this.router.navigateByUrl('waitingroom');
  }



  save()
  {

  }


}
