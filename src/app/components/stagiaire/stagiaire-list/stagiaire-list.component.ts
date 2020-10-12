import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../../../controller/model/stagiaire';
import { StagiaireService } from '../../../controller/service/stagiaire.service';

@Component({
  selector: 'app-stagiaire-list',
  templateUrl: './stagiaire-list.component.html',
  styleUrls: ['./stagiaire-list.component.css']
})
export class StagiaireListComponent implements OnInit {

  constructor(private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
    this.stagiaireService.getAll();
 }

 get stagiaires(): Array<Stagiaire> {
   return this.stagiaireService.stagiaires;
 }

 public update(stagiaire: Stagiaire) {
   this.stagiaireService.stagiaire = this.clone(stagiaire);
 }

 public delete(id: number, index: number) {
   if (confirm('Voulez-vous vraiment faire cette action?')) {
     this.stagiaireService.delete(id, index);
   }
 }

 private clone(stagiaire: Stagiaire){
   const e = new Stagiaire();
   e.id = stagiaire.id;
   e.cin = stagiaire.cin;
   e.nom = stagiaire.nom;
   e.prenom = stagiaire.prenom;
   e.email = stagiaire.email;
   e.ville = stagiaire.ville;
   e.adresse = stagiaire.adresse;
   e.datenaissance = stagiaire.datenaissance;
   e.departement = stagiaire.departement;
   e.designation = stagiaire.designation;
   return e;
 }
}
