import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  start()
  {
      this.router.navigateByUrl('waitingroom?code=abcd');
  }

}
