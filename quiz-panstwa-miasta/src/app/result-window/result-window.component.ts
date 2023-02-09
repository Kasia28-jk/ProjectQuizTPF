import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-window',
  templateUrl: './result-window.component.html',
  styleUrls: ['./result-window.component.css']
})
export class ResultWindowComponent {

  constructor(private router: Router) {}

  grajPonownie()
  {
    this.router.navigateByUrl('waitingroom');
  }

  save()
  {

  }
}
