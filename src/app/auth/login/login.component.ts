import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../controller/service/auth/authentification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
  }

  get userCandidat() {
      return this.authService.userCandidat;
  }

  ngOnInit() {
  }

  public login() {
      return this.authService.login();
  }

 }
