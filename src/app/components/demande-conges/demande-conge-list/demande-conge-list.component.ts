import { Component, OnInit } from '@angular/core';
import { DemandeCongeService } from '../../../controller/service/demande-conge.service';
import { DemandeConge } from '../../../controller/model/demande-conge.model';

@Component({
  selector: 'app-demande-conge-list',
  templateUrl: './demande-conge-list.component.html',
  styleUrls: ['./demande-conge-list.component.css']
})
export class DemandeCongeListComponent implements OnInit {

  constructor(private demandeCongeService: DemandeCongeService) { }

  ngOnInit(): void {
    this.demandeCongeService.getAll();
  }

  get demandeConges(): Array<DemandeConge>{
    return this.demandeCongeService.demandeConges;
  }

  public update(demandeConge: DemandeConge) {
    this.demandeCongeService.demandeConge = this.clone(demandeConge);
  }
  
  public delete(id: number, index: number) {
    if (confirm('Voulez-vous vraiment faire cette action?')) {
      this.demandeCongeService.delete(id, index);
    }
  }

  private clone(demandeConge: DemandeConge){
    const d = new DemandeConge();
    d.id = demandeConge.id;
    d.employee = demandeConge.employee;
    d.typeConge = demandeConge.typeConge;
    d.dateDebut = demandeConge.dateDebut;
    d.dateFin = demandeConge.dateFin;
    d.duree = demandeConge.duree;
    d.horaire = demandeConge.horaire;
    d.raison = demandeConge.raison;
    d.certificat = demandeConge.certificat;
    d.status = demandeConge.status;
    return d;
  }

}
