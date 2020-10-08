import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../controller/service/employee.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  get user(){
    return this.employeeService.user;
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  public getUserDetails(){
     this.employeeService.getUser(sessionStorage.getItem('username'));
  }

  public updateUser(){
    this.employeeService.updateUser();
  }

  save(){

  }

}
