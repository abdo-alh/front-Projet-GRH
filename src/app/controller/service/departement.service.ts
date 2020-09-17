import { Injectable } from '@angular/core';
import { Departement } from '../model/departement.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private baseUrl = 'http://localhost:8090/tp-jwt/departement';
  private _departement: Departement = new Departement();
  private _departements: Array<Departement> = new Array<Departement>();
  
  constructor(private http: HttpClient) { }

  get departement(): Departement {
    if (this._departement == null) {
      this._departement = new Departement();
    }
    return this._departement;
  }

  set departement(value: Departement) {
    this._departement = value;
  }

  get departements(): Array<Departement> {
    return this._departements;
  }

  set departements(value: Array<Departement>) {
    this._departements = value;
  }

  public save() {
    this.http.post<Departement>(this.baseUrl + '/', this.departement).subscribe(data => {
      if (data != null) {
        this.departements.push(this.departement);
        this.departement = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.departement).subscribe(data => {
      if (data > 0) {
        const index = this.departements.findIndex(p => p.id === this.departement.id);
        this.departements[index] = this.departement;
        this.departement = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  
  public delete(id, index) {
    this.http.delete<number>(this.baseUrl + '/delete/id/' + id).subscribe(data => {
      if (data > 0) {
        this.departements.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }
  public getAllDepartements(){
    return this.http.get<Departement[]>(this.baseUrl+'/');
  }

  public getAll() {
    this.http.get<Array<Departement>>(this.baseUrl + '/').subscribe(data => {
      this.departements = data;
    });
  }
}
