import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../../../controller/service/holiday.service';

@Component({
  selector: 'app-holiday-create',
  templateUrl: './holiday-create.component.html',
  styleUrls: ['./holiday-create.component.css']
})
export class HolidayCreateComponent implements OnInit {

  constructor( private holidayService:HolidayService ) { }

  ngOnInit(): void {
  }

  get holiday(){
    return this.holidayService.holiday;
  }

  public save() {
    if (this.holidayService.holiday.id != null) {
       this.holidayService.update();
         //console.log("error");
       console.log("update");
    }
    else {
      this.holidayService.save();
      console.log("save");
    }
  }

}
