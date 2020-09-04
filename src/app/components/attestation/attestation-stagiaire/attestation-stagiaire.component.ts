import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../../../controller/model/stagiaire';
import { EquipeItem } from '../../../controller/model/equipe-item';
import { StagiaireService } from '../../../controller/service/stagiaire.service';

@Component({
  selector: 'app-attestation-stagiaire',
  templateUrl: './attestation-stagiaire.component.html',
  styleUrls: ['./attestation-stagiaire.component.css']
})
export class AttestationStagiaireComponent implements OnInit {

  closeResult: string;
  equipeItem: EquipeItem;
  stagiaires:Stagiaire[];

  constructor(private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
    
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
