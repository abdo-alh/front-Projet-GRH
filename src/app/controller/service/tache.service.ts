import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from '../model/tache.model';
import { User } from '../model/user';
import { AuthenticationService } from './auth/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private baseUrl = 'http://localhost:8090/tp-jwt/tache';
  private _tache: Tache = new Tache();
  private _taches: Array<Tache> = new Array<Tache>();
  public user:User

  public getUser(){
    let user = sessionStorage.getItem('username');
    this.http.get<User>('http://localhost:8090/tp-jwt/auth/email/'+ user).subscribe(data =>{
      this.user = data
      console.log(data)
    })
  }
  constructor( private http:HttpClient, private authService:AuthenticationService ) { }

  get tache(): Tache {
    if (this._tache == null) {
      this._tache = new Tache();
    }
    return this._tache;
  }

  set tache(value: Tache) {
    this._tache = value;
  }

  get taches(): Array<Tache> {
    return this._taches;
  }

  set taches(value: Array<Tache>) {
    this._taches = value;
  }

  public save() {
    this.tache.employee = this.user
    console.log( this.tache.employee)
    this.http.post<Tache>(this.baseUrl + '/', this.tache).subscribe(data => {
      if (data != null) {
        this.tache.id = data.id;
        this.taches.push(this.tache);
        this.tache = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.tache).subscribe(data => {
      if (data != null) {
        const index = this.taches.findIndex(p => p.id === this.tache.id);
        this.taches[index] = this.tache;
        this.tache = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public delete(id, index) {
    this.http.delete<void>(this.baseUrl + '/id/' + id).subscribe(data => {
      if (data != null) {
        this.taches.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }

  public getAll() {
    this.http.get<Array<Tache>>(this.baseUrl + '/').subscribe(data => {
      this.taches = data;
    });
  }

}
