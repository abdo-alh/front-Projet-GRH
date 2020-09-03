import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../controller/service/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html'
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  displayElement = false;
  get employee(){
    return this.employeeService.employee;
  }

  public save() {
    if (this.employeeService.employee.id != null) {
      this.employeeService.update();
    }
    else {
      this.employeeService.save();
    }
  }

}
