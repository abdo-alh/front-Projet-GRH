import { Component, OnInit } from '@angular/core';
import { StageService } from '../../../controller/service/stage.service';
import { Employee } from '../../../controller/model/employee';
import { EmployeeService } from '../../../controller/service/employee.service';

@Component({
  selector: 'app-stage-create',
  templateUrl: './stage-create.component.html',
  styleUrls: ['./stage-create.component.css']
})
export class StageCreateComponent implements OnInit {

  encadrent:Employee = new Employee();
  employees:Employee[];

  constructor(private stageService:StageService,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  get stage(){
    return this.stageService.stage;
  }

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

  public save() {
    if (this.stageService.stage.id != null) {
      this.stageService.update();
    }
    else {
      this.stageService.save();
    }
  }

  public onOptionsSelected(value: Employee) {
    console.log(value);
  }

}
