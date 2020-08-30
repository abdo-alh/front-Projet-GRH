import { Component, OnInit } from '@angular/core';
import { StageService } from '../../../controller/service/stage.service';
import { Employee } from '../../../controller/model/employee';
import { EmployeeService } from '../../../controller/service/employee.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
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

  constructor(private stageService: StageService, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  get stage() {
    return this.stageService.stage;
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

  generatorPdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open();
        break;
      case 'print': pdfMake.createPdf(documentDefinition).print();
        break;
      case 'download':
        pdfMake.createPdf(documentDefinition).download(this.dateNow()+'_'+this.stage.encadrent.nom + '_' + this.stage.encadrent.prenom);
        break;
      default: pdfMake.createPdf(documentDefinition).open();
        break;
    }


  }

  getDocumentDefinition() {
    return {
      content: [
        {
          text: 'ATTESTATION DE STAGE',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: 'Raison : ' + this.stage.raison
            },
            {
              text: 'Etat : ' + this.stage.etat
            },
            {
              text: 'Encadrant : ' + this.stage.encadrent.nom + ' ' + this.stage.encadrent.nom
            }]
          ]
        }],
      styles: {
        name: {
          fontSize: 16,
          bold: true
        }
      }
    };
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

  public save() {
    if (this.stageService.stage.id != null) {
      this.stageService.update();
    }
    else {
      this.stageService.save();
    }
  }

  public onOptionsSelected(value: Employee) {
    console.log(value);
  }

}
