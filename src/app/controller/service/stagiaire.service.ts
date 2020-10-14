import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stagiaire } from '../model/stagiaire';
import { Stage } from '../model/stage';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private baseUrl = 'http://localhost:8090/tp-jwt/stagiaire';
  private _stagiaire: Stagiaire = new Stagiaire();
  private _stagiaires: Array<Stagiaire> = new Array<Stagiaire>();

  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<Stagiaire>(this.baseUrl + '/', this.stagiaire).subscribe(data => {
      if (data != null) {
        this.stagiaire.id = data.id;
        this.stagiaires.push(this.stagiaire);
        this.stagiaire = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.stagiaire).subscribe(data => {
      if (data != null) {
        const index = this.stagiaires.findIndex(p => p.id === this.stagiaire.id);
        this.stagiaires[index] = this.stagiaire;
        this.stagiaire = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public delete(id, index) {
    this.http.delete<number>(this.baseUrl + '/delete/id/' + id).subscribe(data => {
      if (data > 0) {
        this.stagiaires.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }

  public getAllStagiaires(){
    return this.http.get<Stagiaire[]>(this.baseUrl+'/');
  }

  public nbStagiaires(){
    return this.http.get<number>(this.baseUrl+'/count/');
  }

  public getAll() {
    this.http.get<Array<Stagiaire>>(this.baseUrl + '/').subscribe(data => {
      this.stagiaires = data;
    });
  }

  get stagiaire(): Stagiaire {
    if (this._stagiaire == null) {
      this._stagiaire = new Stagiaire();
    }
    return this._stagiaire;
  }

  set stagiaire(value: Stagiaire) {
    this._stagiaire = value;
  }

  get stagiaires(): Array<Stagiaire> {
    return this._stagiaires;
  }

  set stagiaires(value: Array<Stagiaire>) {
    this._stagiaires = value;
  }
}
