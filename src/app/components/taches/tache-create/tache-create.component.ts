import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../controller/model/employee';
import { EmployeeService } from '../../../controller/service/employee.service';
import { TacheService } from '../../../controller/service/tache.service';

@Component({
  selector: 'app-tache-create',
  templateUrl: './tache-create.component.html',
  styleUrls: ['./tache-create.component.css']
})
export class TacheCreateComponent implements OnInit {

  employee: Employee = new Employee();
  employees: Employee[];

  constructor(private tacheService: TacheService, private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  get tache(){
    return this.tacheService.tache
  }


  public save() {
    if (this.tacheService.tache.id != null) {
       this.tacheService.update();
         //console.log("error");
       console.log("update");
    }
    else {
      this.tacheService.save();
      console.log("save");
    }
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

  public onOptionsSelectedem(value: Employee) {
    console.log(value);
  }

}
