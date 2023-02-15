import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { DataServiceService } from '../data-service.service';
import { AuthService } from '../auth.service';
import { Answer } from '../models/answer';
import { User } from '../models/user';
import { InitialResult, Result } from '../models/result';
import { delay, interval } from 'rxjs';

@Component({
  selector: 'app-result-window',
  templateUrl: './result-window.component.html',
  styleUrls: ['./result-window.component.css']
})
export class ResultWindowComponent  implements OnInit{
  data: any [];
  userId: string;
  answers:  Answer[];
  codePath: string;
  users: User[];
  results:Result[] = [];
  
  constructor(private router: Router,  private db: AngularFirestore,
     private dataService: DataServiceService,public authService: AuthService,
     private route: ActivatedRoute) {
     }
  
  
  ngOnInit(): void 
  {
    const params = this.route.snapshot.queryParams;
    this.codePath = params["code"]
    this.getData();
  }
  
  getData()
  {
    this.dataService.getAnswersByCode(this.codePath).subscribe((answer: Answer[] | any) =>{
      this.answers = answer
      console.log(answer)
      this.countResults()
    })
  }

  countResults()
  {
    this.answers.forEach(element => 
    {
        let customObj = {
          userId : "",
          userName: "",
          score: 0
      };
      
      let value = this.results.find(x => x.userId === element.userId)
      if(value)
      {
        if(element.animal)
        {
          value.score += 5;
        }
        if(element.city)
        {
          value.score += 5;
        }
        if(element.country)
        {
          value.score += 5;
        }
        if(element.item)
        {
          value.score += 5;
        }
        if(element.plant)
        {
          value.score += 5;
        }
        if(element.river)
        {
          value.score += 5;
        }
      }
      else
      {
        customObj.userName = element.userName
        customObj.userId = element.userId
        if(element.animal)
        {
            customObj.score += 5;
        }
        if(element.city)
        {
            customObj.score += 5;
        }
        if(element.country)
        {
            customObj.score += 5;
        }
        if(element.item)
        {
            customObj.score += 5;
        }
        if(element.plant)
        {
            customObj.score += 5;
        }
        if(element.river)
        {
            customObj.score += 5;
        }
      
        this.results.push(customObj);
      }  
    });
  }


  grajPonownie()
  {
    this.router.navigateByUrl('');
  }

  save()
  {
    //to do save changes in other table
    //this.countResults();
  }


}
