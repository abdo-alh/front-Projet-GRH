import { Component, OnInit } from '@angular/core';
import { EquipeItemService } from '../../../controller/service/equipe-item.service';
import { EquipeItem } from '../../../controller/model/equipe-item';

@Component({
  selector: 'app-equipeitem-list',
  templateUrl: './equipeitem-list.component.html',
  styleUrls: ['./equipeitem-list.component.css']
})
export class EquipeitemListComponent implements OnInit {

  constructor(private equipeItemService: EquipeItemService) { }

  ngOnInit(): void {
    this.equipeItemService.getAll();
  }
  
  get equipeitems(): Array<EquipeItem>{
    return this.equipeItemService.equipeitems;
  }

  public update(equipeitem: EquipeItem){
    this.equipeItemService.equipeitem = this.clone(equipeitem);
  }

  public delete(id: number, index: number) {
    if (confirm('Voulez-vous vraiment faire cette action?')) {
      this.equipeItemService.delete(id, index);
    }
  }

  private clone(equipeitem: EquipeItem){
    const e = new EquipeItem();
    e.id = equipeitem.id;
    e.dateDebut = equipeitem.dateDebut;
    e.dateFin = equipeitem.dateFin;
    e.emCv = equipeitem.emCv;
    e.note = equipeitem.note;
    e.stagiaire = equipeitem.stagiaire;
    return e;
  }

}
