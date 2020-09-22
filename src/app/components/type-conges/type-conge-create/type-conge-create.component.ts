import { Component, OnInit } from '@angular/core';
import { TypeCongeService } from '../../../controller/service/type-conge.service';

@Component({
  selector: 'app-type-conge-create',
  templateUrl: './type-conge-create.component.html',
  styleUrls: ['./type-conge-create.component.css']
})
export class TypeCongeCreateComponent implements OnInit {

  constructor(private typeCongeService: TypeCongeService) { }

  ngOnInit(): void {
  }

  get typeConge(){
    return this.typeCongeService.typeConge;
  }


  public save() {
    if (this.typeCongeService.typeConge.id != null) {
       this.typeCongeService.update();
<<<<<<< HEAD
         //console.log("error");
=======
       console.log("update");
>>>>>>> 0889e2f5d6b703daac1b6ec5e182d3ca51c0b847
    }
    else {
      this.typeCongeService.save();
      console.log("save");
    }
  }
}
