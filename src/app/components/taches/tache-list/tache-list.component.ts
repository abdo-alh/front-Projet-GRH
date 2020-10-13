import { Component, OnInit } from '@angular/core';
import { Tache } from '../../../controller/model/tache.model';
import { TacheService } from '../../../controller/service/tache.service';

@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.css']
})
export class TacheListComponent implements OnInit {

  constructor(private tacheService:TacheService) { }

  ngOnInit(): void {
    this.tacheService.getAll();
  }

  get taches(): Array<Tache> {
    return this.tacheService.taches;
  }

}
