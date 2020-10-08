import { Component, OnInit } from '@angular/core';
import { Departement } from '../../../controller/model/departement.model';
import { Designation } from '../../../controller/model/designation.model';
import { DepartementService } from '../../../controller/service/departement.service';
import { DesignationService } from '../../../controller/service/designation.service';
import { EmployeeService } from '../../../controller/service/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']

})
export class EmployeeCreateComponent implements OnInit {


  departement:Departement = new Departement();
  departements:Departement[];

  designation:Designation = new Designation();
  designations:Designation[];


  constructor(private employeeService:EmployeeService, private departementService: DepartementService,
    private designationService: DesignationService) { }

  ngOnInit(): void {
    this.getAllDepartements();
    this.getAllDesignations();
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

  public getAllDepartements(){
    this.departementService.getAllDepartements().subscribe(
      data => {
        this.departements = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public onOptionsSelectedem(value: Departement){
    console.log(value);
  }
  
  public getAllDesignations(){
    this.designationService.getAllDepartements().subscribe(
      data => {
        this.designations = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public onOptionsSelectedeme(value: Designation){
    console.log(value);
  }



}
