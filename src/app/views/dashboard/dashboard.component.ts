import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { StagiaireService } from '../../controller/service/stagiaire.service';
import { EmployeeService } from '../../controller/service/employee.service';
import { StageService } from '../../controller/service/stage.service';
import { DemandeCongeService } from '../../controller/service/demande-conge.service';
import { TacheService } from '../../controller/service/tache.service';
import { Tache } from '../../controller/model/tache.model';
import { HolidayService } from '../../controller/service/holiday.service';
import { Holiday } from '../../controller/model/holiday';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
  
})
export class DashboardComponent implements OnInit {

  nbStagiaires;
  nbEmployees;
  nbConges;
  nbStages;

  constructor(private stagiaireService:StagiaireService,private employeeService:EmployeeService,private stageService:StageService,private demandeCongeService:DemandeCongeService,
    private tacheService:TacheService,private holidayService:HolidayService ){

  }

  initAll(){
    this.employeeService.nbEmployees().subscribe(
      data=>{
        this.nbEmployees = data;
      })
    this.stagiaireService.nbStagiaires().subscribe(
      data=>{
        this.nbStagiaires = data;
      }
    )
    this.stageService.nbStages().subscribe(
      data=>{
        this.nbStages = data;
      }
    )
    this.demandeCongeService.nbConges().subscribe(
      data=>{
        this.nbConges = data;
      }
    )
    this.tacheService.getUser();
    this.tacheService.getAll();
    this.holidayService.getAll();
  }

  ngOnInit(): void {
    this.initAll();
  }

  get taches(): Array<Tache> {
    return this.tacheService.taches;
  }

  get tache(){
    return this.tacheService.tache
  }

  get holidays(): Array<Holiday>{
    return this.holidayService.holidays;
  }

  public save() {
    if (this.tacheService.tache.id != null) {
       this.tacheService.update();
         //console.log("error");
       console.log("update");
    }
    else {
      this.tacheService.save();
      console.log("save");
    }
  }

}
