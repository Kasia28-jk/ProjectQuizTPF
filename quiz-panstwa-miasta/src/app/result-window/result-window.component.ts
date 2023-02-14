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
        console.log(element.userName);
        customObj.userName = element.userName
        customObj.userId = element.userId
        for(let key in element)
        {
          if(element[key])
          {
            customObj.score += 5;
          }
        }
      
        console.log("one object: ",customObj)
        this.results.push(customObj)
        /*if(this.results.length !== 0)
        {
        this.results.forEach(element2 => 
        {
          //console.log(customObj.userId)
          console.log(element2.userId)
          if(customObj.userId !== element2.userId)
         {
          this.results.push(customObj);
         }
        //  else
         // {
         //   console.log("nie cos")
         //  
         // }
        });    
      }
      else
      {
        this.results.push(customObj);
      }*/
    });

    console.log("Result after foreach: ",this.results)
  }


  grajPonownie()
  {
    this.router.navigateByUrl('');
  }

  save()
  {
    //this.countResults();
  }


}
