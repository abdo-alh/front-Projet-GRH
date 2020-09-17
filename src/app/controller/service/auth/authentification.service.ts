import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { UserAuth } from '../../model/user-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = 'http://localhost:8080/login';
  public userCandidat = new UserAuth();
  public authenticatedUser = new User();
  public authenticated: boolean = null;

  constructor(
    private http:HttpClient,
    private router:Router
  ) { 
     }

     authenticate(username, password) {
      return this.http.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
         }
       )
  
      );
    }


  public login() {
      console.log(this.userCandidat);
      this.http.post<any>(this.loginUrl, this.userCandidat, {observe: 'response'}).subscribe(
          resp => {
              let jwt = resp.headers.get('Authorization');
              this.saveToken(jwt);
              this.loadInfos();
              if (this.authenticatedUser) {
                  this.router.navigate(['dashboard']);
              } else {
                  this.router.navigate(['resetPassword']);
              }
          }, error1 => {
              console.log(error1)
          }
      );
  }


  public saveToken(token: string) {
      localStorage.setItem('token', token);
  }

  public loadInfos() {
      let helper = new JwtHelperService();
      let username = helper.decodeToken(localStorage.getItem('token')).sub;
      let roles = helper.decodeToken(localStorage.getItem('token')).roles;
      let passwordChanged = helper.decodeToken(localStorage.getItem('token')).passwordChanged;

      /* this.authenticatedUser.passwordChanged = passwordChanged;
      this.authenticatedUser.username = username;
      this.authenticatedUser.rolesVo = roles; */
      this.authenticated = true;

  }

  public logout() {
      localStorage.removeItem('token');
      this.authenticated = false;
      this.authenticatedUser = new User();
      this.router.navigate(['login']);
  }


  // public hasRole(role): boolean {
  //   for (let r of this.authenticatedUser.roles) {
  //     if (r == role) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
