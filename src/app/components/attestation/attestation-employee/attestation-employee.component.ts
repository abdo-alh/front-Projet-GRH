import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../controller/model/employee';
import { Stage } from '../../../controller/model/stage';
import { EmployeeService } from '../../../controller/service/employee.service';


@Component({
  selector: 'app-attestation-employee',
  templateUrl: './attestation-employee.component.html',
  styleUrls: ['./attestation-employee.component.css']
})
export class AttestationEmployeeComponent implements OnInit {

  employees: Employee[];
  employee: Employee;

  ngOnInit(): void {
    this.getAllEmployees();
  }

  constructor(private employeeService: EmployeeService) { }


  public getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employees = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public onOptionsSelected(value: Employee) {
    console.log(value);
  }



}
