import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../controller/model/employee';
import { EmployeeService } from '../../../controller/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
     this.employeeService.getAll();
  }

  get employees(): Array<Employee> {
    return this.employeeService.employees;
  }

  public update(employee: Employee) {
    this.employeeService.employee = this.clone(employee);
  }

  public delete(id: number, index: number) {
    if (confirm('Voulez-vous vraiment faire cette action?')) {
      this.employeeService.delete(id, index);
    }
  }

  private clone(employee: Employee){
    const e = new Employee();
    e.id = employee.id;
    e.cin = employee.cin;
    e.nom = employee.nom;
    e.prenom = employee.prenom;
    e.email = employee.email;
    e.ville = employee.ville;
    e.adresse = employee.adresse;
    e.datenaissance = employee.datenaissance;
    e.departement = employee.departement;
    e.designation = employee.designation;
    return e;
  }

}
