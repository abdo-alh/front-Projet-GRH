import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../controller/service/auth/authentification.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private router:Router,private authService:AuthenticationService){}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  profile(){
    this.router.navigate(['/user-profile']);
  }

  logout(){
    this.authService.logOut();
  }

}
