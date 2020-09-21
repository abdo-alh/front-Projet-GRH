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
       console.log("update");
    }
    else {
      this.typeCongeService.save();
      console.log("save");
    }
  }
}
