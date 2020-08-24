import { Component, OnInit } from '@angular/core';
import { StagiaireService } from '../../../controller/service/stagiaire.service';

@Component({
  selector: 'app-stagiaire-create',
  templateUrl: './stagiaire-create.component.html',
  styleUrls: ['./stagiaire-create.component.css']
})
export class StagiaireCreateComponent implements OnInit {

  constructor(private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
  }

  get stagiaire(){
    return this.stagiaireService.stagiaire;
  }

  public save() {
    if (this.stagiaireService.stagiaire.id != null) {
      this.stagiaireService.update();
    }
    else {
      this.stagiaireService.save();
    }
  }

}
