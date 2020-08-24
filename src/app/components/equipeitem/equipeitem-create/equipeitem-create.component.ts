import { Component, OnInit } from '@angular/core';
import { EquipeItemService } from '../../../controller/service/equipe-item.service';

@Component({
  selector: 'app-equipeitem-create',
  templateUrl: './equipeitem-create.component.html',
  styleUrls: ['./equipeitem-create.component.css']
})
export class EquipeitemCreateComponent implements OnInit {

  constructor(private equipeitemService: EquipeItemService) { }
  ngOnInit(): void {}

  public save() {
    if (this.equipeitemService.equipeitem.id != null) {
      //this.equipeitemService.update();
      console.log("error");
    }
    else {
      this.equipeitemService.save();
    }
}
}
