import { Component, OnInit } from '@angular/core';
import { StageService } from '../../../controller/service/stage.service';
import { Employee } from '../../../controller/model/employee';
import { EmployeeService } from '../../../controller/service/employee.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { StagiaireService } from '../../../controller/service/stagiaire.service';
import { Stagiaire } from '../../../controller/model/stagiaire';
import { Router } from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-stage-create',
  templateUrl: './stage-create.component.html',
  styleUrls: ['./stage-create.component.css']
})
export class StageCreateComponent implements OnInit {

  //This is stage Create Component

  encadrent: Employee = new Employee();
  employees: Employee[];
  stagiaires:Stagiaire[];
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

  constructor(private router: Router,private stageService: StageService, private employeeService: EmployeeService,private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
    this.getAllEmployees();
    this.getAllStagiaires();
  }

  get stage() {
    return this.stageService.stageCreate;
  }

  dateNow() {
    let date_ob = new Date();

    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // prints date in YYYY-MM-DD format
    return year + "-" + month + "-" + date;
  }

  public addItem(){
    this.stageService.addItem();
  }

  public get stagiaire(){
    return this.stageService.stagiaireCreate;
  }

  public set stagiaire(value:Stagiaire){
    this.stageService.stagiaireCreate = value;
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

  public getAllStagiaires(){
    this.stagiaireService.getAllStagiaires().subscribe(
      data => {
        this.stagiaires = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public save() {
    this.stageService.save();
    this.router.navigate(['/stage-list']);
  }

  public onOptionsSelected(value: Employee) {
    console.log(value);
  }

  public delete(id: number) {
    console.log(id);
    this.stageService.delete(id);
  }

  public find(id: number) {
    this.stageService.find(id);
  }

  public get equipeItem(){
    return this.stageService.itemCreate;
  }

  public get equipeItems(){
    return this.stageService.stageCreate.equipeItems;
  }

}
