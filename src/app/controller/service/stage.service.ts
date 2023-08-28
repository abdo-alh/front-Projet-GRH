import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Stage } from '../model/stage';
import { EquipeItem } from '../model/equipe-item';
import { Stagiaire } from '../model/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private baseUrl = 'http://localhost:8090/tp-jwt/stage';
  public stageCreate : Stage = new Stage();
  public itemCreate: EquipeItem = new EquipeItem();
  public stagiaireCreate : Stagiaire = new Stagiaire();
  private _stages: Array<Stage> = new Array<Stage>();

  constructor(private http: HttpClient) { }

  public save() {
    this.itemCreate.stagiaire = this.stagiaireCreate;
    this.http.post<number>(this.baseUrl + '/', this.stageCreate).subscribe(data => {
      if (data > 0) {
        console.log(data);
        this.stageCreate = new Stage();
        this.itemCreate = new EquipeItem();
        this.stagiaireCreate = new Stagiaire();
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public addItem(){
    this.itemCreate.stagiaire = this.stagiaireCreate;
    let itemClone = new EquipeItem();
    itemClone.id = this.itemCreate.id;
    itemClone.note = this.itemCreate.note;
    itemClone.dateDebut = this.itemCreate.dateDebut;
    itemClone.dateFin = this.itemCreate.dateFin;
    itemClone.dateRecuCv = this.itemCreate.dateRecuCv;
    itemClone.emCv = this.itemCreate.emCv;
    itemClone.stagiaire = this.itemCreate.stagiaire;
    console.log(itemClone);
    console.log(this.itemCreate.stagiaire);
    this.stageCreate.equipeItems.push(itemClone);
    console.log(this.stageCreate.equipeItems);
    this.itemCreate = new EquipeItem();
  }

  public update() {
    const url = `${this.baseUrl}/update/${this.stageCreate.id}`;
    this.http.put<number>(url,this.stageCreate).subscribe(data => {
      if (data > 0) {
        const index = this.stages.findIndex(p => p.id === this.stageCreate.id);
        this.stages[index] = this.stageCreate;
        this.stageCreate = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public deleteStage(stage, index) {
    this.http.request<void>('delete',this.baseUrl + '/delete/',{body:stage}).subscribe(data => {
      if (data != null) {
        this.stages.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }

  public delete(id:number){
    this.stageCreate.equipeItems.splice(id,1);
  }

  public find(id:number) {
    const item = this.stageCreate.equipeItems.splice(id,1).pop();
    this.itemCreate.id = item.id ;
    this.itemCreate.note  = item.note;
    this.itemCreate.dateDebut  = item.dateDebut;
    this.itemCreate.dateRecuCv  = item.dateRecuCv;
    this.itemCreate.dateFin  = item.dateFin;
    this.itemCreate.emCv  = item.emCv;
  }

  public getAll() {
    this.http.get<Array<Stage>>(this.baseUrl + '/').subscribe(data => {
      this.stages = data;
    });
  }

  public nbStages() {
    return this.http.get<number>(this.baseUrl + '/count/');
  }

  get stages(): Array<Stage> {
    return this._stages;
  }

  set stages(value: Array<Stage>) {
    this._stages = value;
  }
}
