import { Component, OnInit } from '@angular/core';
import { EquipeItemService } from '../../../controller/service/equipe-item.service';
import { Stagiaire } from '../../../controller/model/stagiaire';
import { StagiaireService } from '../../../controller/service/stagiaire.service';

@Component({
  selector: 'app-equipeitem-create',
  templateUrl: './equipeitem-create.component.html',
  styleUrls: ['./equipeitem-create.component.css']
})
export class EquipeitemCreateComponent implements OnInit {

  stagiaire:Stagiaire = new Stagiaire();
  stagiaires:Stagiaire[];


  constructor(private equipeitemService: EquipeItemService, private stagiaireService: StagiaireService) { }
  ngOnInit(): void {
    this.getAllStagiaires();
  }

  get equipeitem(){
    return this.equipeitemService.equipeitem;
  }

  public save() {
    if (this.equipeitemService.equipeitem.id != null) {
      this.equipeitemService.update();
      console.log("error");
    }
    else {
      this.equipeitemService.save();
    }
}

public getAllStagiaires(){
  this.stagiaireService.getAllStagiaires().subscribe(
    data => {
      this.stagiaires = data;
    },
    error => {
      console.log(error);
    }
  )
}

public onOptionsSelected(value: Stagiaire){
  console.log(value);
}

}
