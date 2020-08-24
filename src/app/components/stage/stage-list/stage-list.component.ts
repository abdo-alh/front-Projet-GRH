import { Component, OnInit } from '@angular/core';
import { StageService } from '../../../controller/service/stage.service';
import { Stage } from '../../../controller/model/stage';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.css']
})
export class StageListComponent implements OnInit {

  constructor(private stageService:StageService) { }

  ngOnInit(): void {
    this.stageService.getAll();
 }

 get stages(): Array<Stage> {
   return this.stageService.stages;
 }

 public update(stage: Stage) {
   this.stageService.stage = this.clone(stage);
 }

 public delete(id: number, index: number) {
   if (confirm('Voulez-vous vraiment faire cette action?')) {
     this.stageService.delete(id, index);
   }
 }

 private clone(stage: Stage){
   const e = new Stage();
   e.id = stage.id;
   e.raison = stage.raison;
   e.etat=stage.etat;
   e.encadrent = stage.encadrent;
   return e;
 }

}
