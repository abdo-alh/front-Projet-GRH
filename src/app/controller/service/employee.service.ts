import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8090/tp-jwt/employee';
  private _employee: Employee = new Employee();
  private _employees: Array<Employee> = new Array<Employee>();

  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<Employee>(this.baseUrl + '/', this.employee).subscribe(data => {
      if (data != null) {
        this.employee.id = data.id;
        this.employees.push(this.employee);
        this.employee = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public getAllEmployees(){
    return this.http.get<Employee[]>(this.baseUrl+'/');
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.employee).subscribe(data => {
      if (data > 0) {
        const index = this.employees.findIndex(p => p.id === this.employee.id);
        this.employees[index] = this.employee;
        this.employee = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public delete(id, index) {
    this.http.delete<number>(this.baseUrl + '/delete/id/' + id).subscribe(data => {
      if (data > 0) {
        this.employees.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }

  public getAll() {
    this.http.get<Array<Employee>>(this.baseUrl + '/').subscribe(data => {
      this.employees = data;
    });
  }

  get employee(): Employee {
    if (this._employee == null) {
      this._employee = new Employee();
    }
    return this._employee;
  }

  set employee(value: Employee) {
    this._employee = value;
  }

  get employees(): Array<Employee> {
    return this._employees;
  }

  set employees(value: Array<Employee>) {
    this._employees = value;
  }
}
