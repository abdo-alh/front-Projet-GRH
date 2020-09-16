import { Component, OnInit } from '@angular/core';
import { Departement } from '../../../controller/model/departement.model';
import { Designation } from '../../../controller/model/designation.model';
import { DepartementService } from '../../../controller/service/departement.service';
import { DesignationService } from '../../../controller/service/designation.service';
import { StagiaireService } from '../../../controller/service/stagiaire.service';

@Component({
  selector: 'app-stagiaire-create',
  templateUrl: './stagiaire-create.component.html',
  styleUrls: ['./stagiaire-create.component.css']
})
export class StagiaireCreateComponent implements OnInit {

  departement:Departement = new Departement();
  departements:Departement[];

  designation:Designation = new Designation();
  designations:Designation[];
  
  constructor(private stagiaireService:StagiaireService , private departementService:DepartementService,
    private designationService: DesignationService) { }

  ngOnInit(): void {
    this.getAllDepartements();
    this.getAllDesignations();
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

  public getAllDepartements(){
    this.departementService.getAllDepartements().subscribe(
      data => {
        this.departements = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public onOptionsSelectedem(value: Departement){
    console.log(value);
  }
  
  public getAllDesignations(){
    this.designationService.getAllDepartements().subscribe(
      data => {
        this.designations = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public onOptionsSelectedeme(value: Designation){
    console.log(value);
  }

}
