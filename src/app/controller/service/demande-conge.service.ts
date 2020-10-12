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

  
  public save(file:File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('demandeConge', JSON.stringify(this.demandeConge));
    this.http.post<DemandeConge>(this.baseUrl + '/', formData).subscribe(data => {
      if (data != null) {
        this.demandeConge.id = data.id;
        this.demandeConges.push(this.demandeConge);
        this.demandeConge = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public load(nomCertificat:string){
    return this.http.get(this.baseUrl+'/download/'+nomCertificat);
  }



  public getAllDemandeConge(){
    return this.http.get<DemandeConge[]>(this.baseUrl+'/');
  }

  public nbConges(){
    return this.http.get<number>(this.baseUrl+'/count/');
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

  /* public uploadFile(file: FormData) {
    this.http.post<number>(this.baseUrl + '/uploadFile', file).subscribe(
      data => {
        if (data === 1) {
          document.getElementById('fa').style.display = ' inline';
          document.getElementById('label2').innerText = 'sucess';
          document.getElementById('label2').style.color = 'green';
          this.save();
        }
        console.log('sucess');
      }, eror => {
        console.log('eroro', eror);
      });
  }


  public uploadFileEdit(file: FormData, disp: boolean) {
    console.log(file);
    if (disp === false) {
      this.update();
    } else {
      this.http.post<number>('http://localhost:8080/generated/modelLettreReponse/uploadFile', file).subscribe(
        data => {
          if (data === 1) {
            this.update();
            document.getElementById('fa').style.display = ' inline';
            document.getElementById('label2').innerText = 'sucess';
            document.getElementById('label2').style.color = 'green';
          }
          console.log('sucess');
        }, eror => {
          console.log('eroro', eror);
        });
    }
  } */

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
