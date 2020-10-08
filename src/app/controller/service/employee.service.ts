import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8090/tp-jwt/employee';
  private _employee: Employee = new Employee();
  private _employees: Array<Employee> = new Array<Employee>();
  private _user = new User();
  

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

  public nbEmployees(){
    return this.http.get<number>(this.baseUrl+'/count/');
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

  public updateUser() {
    this.http.put<User>(this.baseUrl + '/user/'+this.user.id,this.user).subscribe(data => {
      if (data != null) {
        console.log(this.user);
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

  public getUser(username:string){
    this.http.get<any>(this.baseUrl + '/username/' + username).subscribe(data => {
      this.user = data;
    });
  }

  public getAll() {
    this.http.get<Array<Employee>>(this.baseUrl + '/').subscribe(data => {
      this.employees = data;
    });
  }

  public get user() {
    return this._user;
  }
  public set user(value) {
    this._user = value;
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
