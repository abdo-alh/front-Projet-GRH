import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../controller/service/auth/authentification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;

  constructor(private authService: AuthenticationService,private router:Router) {
  }

  ngOnInit() {
  }

  public login() {
      this.authService.authenticate(this.username,this.password);
      this.authService.isUserLoggedIn();
  }

 }
