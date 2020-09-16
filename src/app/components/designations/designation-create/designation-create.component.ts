import { Component, OnInit } from '@angular/core';
import { DesignationService } from '../../../controller/service/designation.service';

@Component({
  selector: 'app-designation-create',
  templateUrl: './designation-create.component.html',
  styleUrls: ['./designation-create.component.css']
})
export class DesignationCreateComponent implements OnInit {

  constructor( private designationService: DesignationService ) { }

  ngOnInit(): void {
  }

  get designation(){
    return this.designationService.designation;
  }

  public save() {
    if (this.designationService.designation.id != null) {
       this.designationService.update();
       console.log("error");
    }
    else {
      this.designationService.save();
    }
  }

}
