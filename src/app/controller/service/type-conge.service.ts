import { Injectable } from '@angular/core';
import { TypeConge } from '../model/type-conge.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeCongeService {

  private baseUrl = 'http://localhost:8090/tp-jwt/typeConge';
  private _typeConge: TypeConge = new TypeConge();
  private _typeConges: Array<TypeConge> = new Array<TypeConge>();

  constructor(private http: HttpClient) { }

  get typeConge(): TypeConge {
    if (this._typeConge == null) {
      this._typeConge = new TypeConge();
    }
    return this._typeConge;
  }

  set typeConge(value: TypeConge) {
    this._typeConge = value;
  }

  get typeConges(): Array<TypeConge> {
    return this._typeConges;
  }

  set typeConges(value: Array<TypeConge>) {
    this._typeConges = value;
  }

  public save() {
    this.http.post<TypeConge>(this.baseUrl + '/', this.typeConge).subscribe(data => {
      if (data != null) {
        this.typeConge.id = data.id;
        this.typeConges.push(this.typeConge);
        this.typeConge = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.typeConge).subscribe(data => {
      if (data > 0) {
        const index = this.typeConges.findIndex(p => p.id === this.typeConge.id);
        this.typeConges[index] = this.typeConge;
        this.typeConge = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  
  public delete(id, index) {
    this.http.delete<number>(this.baseUrl + '/delete/id/' + id).subscribe(data => {
      if (data > 0) {
        this.typeConges.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }
  
  public getAllTypeConges(){
    return this.http.get<TypeConge[]>(this.baseUrl+'/');
  }

  public getAll() {
    this.http.get<Array<TypeConge>>(this.baseUrl + '/').subscribe(data => {
      this.typeConges = data;
    });
  }


}
