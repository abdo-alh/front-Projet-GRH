import { Component, OnInit } from '@angular/core';
import { StageService } from '../../../controller/service/stage.service';
import { StageComponent } from '../stage.component';

@Component({
  selector: 'app-equipe-item-list',
  templateUrl: './equipe-item-list.component.html'
})
export class EquipeItemListComponent implements OnInit {

  constructor(private stageService: StageService) { }

  ngOnInit(): void {
  }

  public delete(id: number) {
    console.log(id);
    this.stageService.delete(id);
  }

  public find(id: number) {
    this.stageService.find(id);
  }

  public get equipeItem(){
    return this.stageService.itemCreate;
  }

  public get equipeItems(){
    return this.stageService.stageCreate.equipeItems;
  }
}
