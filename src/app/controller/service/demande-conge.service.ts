import { Injectable } from '@angular/core';
import { DemandeConge } from '../model/demande-conge.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeCongeService {
  private baseUrl = 'http://localhost:8090/tp-jwt/demandeConge';
  private _demandeConge: DemandeConge = new DemandeConge();
  private _demandeConges: Array<DemandeConge> = new Array<DemandeConge>();

  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<DemandeConge>(this.baseUrl + '/', this.demandeConge).subscribe(data => {
      if (data != null) {
        this.demandeConges.push(this.demandeConge);
        this.demandeConge = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public getAllDemandeConge(){
    return this.http.get<DemandeConge[]>(this.baseUrl+'/');
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.demandeConge).subscribe(data => {
      if (data > 0) {
        const index = this.demandeConges.findIndex(p => p.id === this.demandeConge.id);
        this.demandeConges[index] = this.demandeConge;
        this.demandeConge = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public delete(id, index) {
    this.http.delete<number>(this.baseUrl + '/delete/id/' + id).subscribe(data => {
      if (data > 0) {
        this.demandeConges.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }

  public getAll() {
    this.http.get<Array<DemandeConge>>(this.baseUrl + '/').subscribe(data => {
      this.demandeConges = data;
    });
  }

  get demandeConge(): DemandeConge {
    if (this._demandeConge == null) {
      this._demandeConge = new DemandeConge();
    }
    return this._demandeConge;
  }

  set demandeConge(value: DemandeConge) {
    this._demandeConge = value;
  }

  get demandeConges(): Array<DemandeConge> {
    return this._demandeConges;
  }

  set demandeConges(value: Array<DemandeConge>) {
    this._demandeConges = value;
  }
}
