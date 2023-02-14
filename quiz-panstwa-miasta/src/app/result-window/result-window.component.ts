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
    this.getData2();
  }
  
  getData()
  {
    this.dataService.getAnswersByCode(this.codePath).subscribe((answer: Answer[] | undefined) =>{
      this.answers = answer
    })

    //console.log(this.answers)
  }

  getData2() {
    this.dataService.getAnswersByCode(this.codePath).subscribe((answer: Answer[]) => {
      console.log(answer)
      this.countResults(answer)
    })
  }

  countResults(answer: Answer[])
  {
    
    answer.forEach(element => 
    {
        let customObj: Result = InitialResult;
        if(element.userName)
        {
          customObj.userName = element.userName
        }

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
    });

    console.log(this.results)
  }


  check()
  {
    if(this.results.length !== 0)
        {
        this.results.forEach(element2 => 
        {
          //console.log(customObj.userId)
          console.log(element2.userId)
          //if(customObj.userId == element2.userId)
         // {
   
         // }
        //  else
         // {
         //   console.log("nie cos")
         //   this.results.push(customObj);
         // }
        });    
      }
      else
      {
        //this.results.push(customObj);
      }
  }


  grajPonownie()
  {
    this.router.navigateByUrl('');
  }

  save()
  {
  }


}
