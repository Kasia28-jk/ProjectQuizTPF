import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { DataServiceService } from '../data-service.service';
import { AuthService } from '../auth.service';
import { Answer } from '../models/answer';
import { User } from '../models/user';
import { Result } from '../models/result';

@Component({
  selector: 'app-result-window',
  templateUrl: './result-window.component.html',
  styleUrls: ['./result-window.component.css']
})
export class ResultWindowComponent  implements OnInit{
  data: any [];
  userId: string;
  answers: Answer[];
  codePath: string;
  users: User[];
  results: Result[];
  
  constructor(private router: Router,  private db: AngularFirestore,
     private dataService: DataServiceService,public authService: AuthService,
     private route: ActivatedRoute) {}
  
  
    ngOnInit(): void 
  {
    const params = this.route.snapshot.queryParams;
    this.codePath = params["code"]
  }
  
  getData()
  {
    this.dataService.getAnswersByCode(this.codePath).subscribe((answer: Answer[]) =>{
      console.log(answer)
      this.answers = answer
    })
  }



  grajPonownie()
  {
    this.router.navigateByUrl('');
  }

  save()
  {
    this.getData()
  }


}
