import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../../controller/service/departement.service';
import { Departement } from '../../../controller/model/departement.model';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {

  constructor( private departementService: DepartementService ) { }

  ngOnInit(): void {
    this.departementService.getAll();
  }

  get departemens() : Array<Departement>{
    return this.departementService.departements;

  }
 
  public update(departement : Departement) {
    this.departementService.departement = this.clone(departement);
  }
  
 
  public delete(id: number, index: number) {
    if (confirm('Voulez-vous vraiment faire cette action?')) {
      this.departementService.delete(id, index);
    }
  }

  private clone(departement: Departement){
    const d = new Departement();
    d.id = departement.id;
    d.libelle = departement.libelle;
    return d;
  }

}
