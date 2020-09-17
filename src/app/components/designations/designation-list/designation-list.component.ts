import { Component, OnInit } from '@angular/core';
import { Designation } from '../../../controller/model/designation.model';
import { DesignationService } from '../../../controller/service/designation.service';

@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.css']
})
export class DesignationListComponent implements OnInit {

  constructor( private designationService: DesignationService ) { }

  ngOnInit(): void {
    this.designationService.getAll();
  }

  get designations() : Array<Designation>{
    return this.designationService.designations;

  }
 
  public update(designation : Designation) {
    this.designationService.designation = this.clone(designation);
  }
  
 
  public delete(id: number, index: number) {
    if (confirm('Voulez-vous vraiment faire cette action?')) {
      this.designationService.delete(id, index);
    }
  }

  private clone(designation: Designation){
    const d = new Designation();
    d.id = designation.id;
    d.libelle = designation.libelle;
    return d;
  }


}
