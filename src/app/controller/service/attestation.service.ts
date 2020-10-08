import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Stagiaire } from '../model/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class AttestationService {

  private baseUrl = 'http://localhost:8090/tp-jwt/attestationEm/';
  private baseUrlSt = 'http://localhost:8090/tp-jwt/attestationSt/';
  private _employee: Employee;
  private _stagiaire: Stagiaire;

  public get stagiaire(): Stagiaire {
    return this._stagiaire;
  }
  public set stagiaire(value: Stagiaire) {
    this._stagiaire = value;
  }

  public get employee(): Employee {
    return this._employee;
  }
  public set employee(value: Employee) {
    this._employee = value;
  }

  constructor(private http: HttpClient) { }

  public findStagiaireAndEquipeItem(){
    return this.http.get<Stagiaire[]>(this.baseUrlSt+'findStagiaireAndEquipeItem/');
  }

  public generateReport(format:string){
    this.http.get<String>(this.baseUrl + 'report/'+format+'/nom/'+this.employee.nom).subscribe(data => {
      if (data != null) {
        console.log('Insertion avec succés : ' + data);
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public generateReportStagiaire(format:string){
    this.http.get<String>(this.baseUrlSt + 'report/'+format+'/nom/'+this.stagiaire.nom).subscribe(data => {
      if (data != null) {
        console.log('Insertion avec succés : ' + data);
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }
}
