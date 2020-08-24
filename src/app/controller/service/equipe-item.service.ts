import { Injectable } from '@angular/core';
import { EquipeItem } from '../model/equipe-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeItemService {
  //private baseUrl = 'http://localhost:8090/tp-jwt/employee';
  //private _employee: Employee = new Employee();
  //private _employees: Array<Employee> = new Array<Employee>();

  private baseUrl = 'http://localhost:8090/tp-jwt/equipeItem';
  private _equipeitem : EquipeItem = new EquipeItem();
  private _equipeitems : Array<EquipeItem> = new Array<EquipeItem>();

  constructor(private http: HttpClient) { }
  
  public save(){
    this.http.post<EquipeItem>(this.baseUrl + '/' , this.equipeitem).subscribe(
      data => {
        if(data != null)
        {
          this.equipeitems.push(this.equipeitem);
          this.equipeitem=null;
        } else{
          console.log('Erreur insertion : ' + data);
        }
      });
  }

  get equipeitem(): EquipeItem {
    if (this._equipeitem == null) {
      this._equipeitem = new EquipeItem();
    }
    return this._equipeitem;
  }

  set equipeitem(value: EquipeItem) {
    this._equipeitem = value;
  }

  get equipeitems(): Array<EquipeItem> {
    return this._equipeitems;
  }

  set equipeitems(value: Array<EquipeItem>) {
    this._equipeitems = value;
  }
}
