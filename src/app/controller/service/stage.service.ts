import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Stage } from '../model/stage';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private baseUrl = 'http://localhost:8090/tp-jwt/stage';
  private _stage: Stage = new Stage();
  private _stages: Array<Stage> = new Array<Stage>();

  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<Stage>(this.baseUrl + '/', this.stage).subscribe(data => {
      if (data != null) {
        this.stages.push(this.stage);
        this.stage = null;
      }
      else {
        console.log('Erreur insertion : ' + data);
      }
    });
  }

  public update() {
    this.http.put<number>(this.baseUrl + '/update/', this.stage.id).subscribe(data => {
      if (data > 0) {
        const index = this.stages.findIndex(p => p.id === this.stage.id);
        this.stages[index] = this.stage;
        this.stage = null;
      }
      else {
        console.log('Erreur modification : ' + data);
      }
    });
  }

  public delete(id, index) {
    this.http.delete<void>(this.baseUrl + '/delete/id/' + id).subscribe(data => {
      if (data != null) {
        this.stages.splice(index, 1);
      }
      else {
        console.log('Erreur suppression : ' + data);
      }
    });
  }

  public getAll() {
    this.http.get<Array<Stage>>(this.baseUrl + '/').subscribe(data => {
      this.stages = data;
    });
  }

  get stage(): Stage {
    if (this._stage == null) {
      this._stage = new Stage();
    }
    return this._stage;
  }

  set stage(value: Stage) {
    this._stage = value;
  }

  get stages(): Array<Stage> {
    return this._stages;
  }

  set stages(value: Array<Stage>) {
    this._stages = value;
  }
}
