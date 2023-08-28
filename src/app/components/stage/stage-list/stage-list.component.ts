import { Component, OnInit } from '@angular/core';
import { StageService } from '../../../controller/service/stage.service';
import { Stage } from '../../../controller/model/stage';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../../controller/service/employee.service';
import { Employee } from '../../../controller/model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.css']
})
export class StageListComponent implements OnInit {

  employees: Employee[];
  closeResult = '';
  editedStage: Stage; // To track the stage being edited
  raisons = [{
    'libelle':'Stage Pfe'
  },{
    'libelle':'Stage'
  }
  ,{
    'libelle':'Stage Préembauche'
  }];
  etats = [{
    'libelle':'Annuler'
  },{
    'libelle':'En Cours'
  }
  ,{
    'libelle':'Terminer'
  }];

  constructor(private router:Router,private employeeService:EmployeeService,private stageService: StageService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.stageService.getAll();
    this.getAllEmployees();
  }

  public getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employees = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  /* edit(content:any,stage: Stage): void {
    this.editedStage = stage;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        // Modal closed
        console.log('Modal closed');
      },
      (reason) => {
        // Modal dismissed
        this.closeEditModal();
        console.log('Modal dismissed');
      }
    );
  } */

  closeEditModal(): void {
    this.editedStage = null;
    this.modalService.dismissAll();
  }

  save(): void {
    if (this.stageService.stageCreate.id != null) {
      this.stageService.update();
    }
    else {
      this.stageService.save();
    }
    this.router.navigate(['/stage-list']);
    this.closeEditModal();
  }

  public onOptionsSelected(value) {
    console.log(value);
  }

  public update(stage: Stage) {
    this.stageService.stageCreate = this.clone(stage);
  }

  public delete(stage, index: number) {
    if (confirm('Voulez-vous vraiment faire cette action?')) {
      this.stageService.deleteStage(stage,index);
    }
  }

  private clone(stage: Stage) {
    const e = new Stage();
    e.id = stage.id;
    e.raison = stage.raison;
    e.etat = stage.etat;
    e.encadrent = stage.encadrent;
    return e;
  }

  open(content,stage:Stage) {
    this.update(stage);
    console.log(stage.encadrent);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  get stages(): Array<Stage> {
    return this.stageService.stages;
  }

  get stage() {
    return this.stageService.stageCreate;
  }

}
