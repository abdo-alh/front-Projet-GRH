import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Holiday } from '../model/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  private baseUrl = 'http://localhost:8090/tp-jwt/holiday';
  private _holiday: Holiday = new Holiday();
  private _holidays: Array<Holiday> = new Array<Holiday>();
  
  constructor( private http:HttpClient ) { }


  get holiday(): Holiday {
    if (this._holiday == null) {
      this._holiday = new Holiday();
    }
    return this._holiday;
  }

  set holiday(value: Holiday) {
    this._holiday = value;
  }

  get holidays(): Array<Holiday> {
    return this._holidays;
  }

  set holidays(value: Array<Holiday>) {
    this._holidays = value;
  }

  public save() {
    this.http.post<Holiday>(this.baseUrl + '/', this.holiday).subscribe(data => {
      if (data != null) {
        this.holiday.id = data.id;
        this.holidays.push(this.holiday);
        this.holiday = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.holiday).subscribe(data => {
      if (data > 0) {
        const index = this.holidays.findIndex(p => p.id === this.holiday.id);
        this.holidays[index] = this.holiday;
        this.holiday = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public delete(id, index) {
    this.http.delete<number>(this.baseUrl + '/id/' + id).subscribe(data => {
      if (data > 0) {
        this.holidays.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }

  public getAll() {
    this.http.get<Array<Holiday>>(this.baseUrl + '/').subscribe(data => {
      this.holidays = data;
    });
  }
}
