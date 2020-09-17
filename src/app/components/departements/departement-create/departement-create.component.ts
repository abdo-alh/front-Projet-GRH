import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../../controller/service/departement.service';

@Component({
  selector: 'app-departement-create',
  templateUrl: './departement-create.component.html',
  styleUrls: ['./departement-create.component.css']
})
export class DepartementCreateComponent implements OnInit {

  constructor( private departementSerivce: DepartementService ) { }

  ngOnInit(): void {
  }

  get departement(){
    return this.departementSerivce.departement;
  }

  public save() {
    if (this.departementSerivce.departement.id != null) {
       this.departementSerivce.update();
       console.log("error");
    }
    else {
      this.departementSerivce.save();
    }
  }
}
