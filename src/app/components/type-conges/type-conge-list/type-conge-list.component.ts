import { Component, OnInit } from '@angular/core';
import { TypeCongeService } from '../../../controller/service/type-conge.service';
import { TypeConge } from '../../../controller/model/type-conge.model';

@Component({
  selector: 'app-type-conge-list',
  templateUrl: './type-conge-list.component.html',
  styleUrls: ['./type-conge-list.component.css']
})
export class TypeCongeListComponent implements OnInit {

  constructor(private typeCongeService: TypeCongeService) { }

  ngOnInit(): void {
    this.typeCongeService.getAll();
  }

  get typeConges() : Array<TypeConge>{
    return this.typeCongeService.typeConges;

  }
  
  public update(typeConge: TypeConge) {
    this.typeCongeService.typeConge = this.clone(typeConge);
  }
  
 
  public delete(id: number, index: number) {
    if (confirm('Voulez-vous vraiment faire cette action?')) {
      this.typeCongeService.delete(id, index);
    }
  }

  private clone(typeConge: TypeConge){
    const t = new TypeConge();
    t.id = typeConge.id;
    t.libelle = typeConge.libelle;
    t.numberJour = typeConge.numberJour;
    return t;
  }

}
