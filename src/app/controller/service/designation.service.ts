import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Designation } from '../model/designation.model';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  private baseUrl = 'http://localhost:8090/tp-jwt/designation';
  private _designation: Designation = new Designation();
  private _designations: Array<Designation> = new Array<Designation>();

  constructor(private http: HttpClient) { }

  get designation(): Designation {
    if (this._designation == null) {
      this._designation = new Designation();
    }
    return this._designation;
  }

  set designation(value: Designation) {
    this._designation = value;
  }

  get designations(): Array<Designation> {
    return this._designations;
  }

  set designations(value: Array<Designation>) {
    this._designations = value;
  }

  public save() {
    this.http.post<Designation>(this.baseUrl + '/', this.designation).subscribe(data => {
      if (data != null) {
        this.designations.push(this.designation);
        this.designation = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.designation).subscribe(data => {
      if (data > 0) {
        const index = this.designations.findIndex(p => p.id === this.designation.id);
        this.designations[index] = this.designation;
        this.designation = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  
  public delete(id, index) {
    this.http.delete<number>(this.baseUrl + '/delete/id/' + id).subscribe(data => {
      if (data > 0) {
        this.designations.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }
  public getAllDepartements(){
    return this.http.get<Designation[]>(this.baseUrl+'/');
  }

  public getAll() {
    this.http.get<Array<Designation>>(this.baseUrl + '/').subscribe(data => {
      this.designations = data;
    });
  }
}
