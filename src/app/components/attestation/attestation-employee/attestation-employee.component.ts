import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Employee } from '../../../controller/model/employee';
import { Stage } from '../../../controller/model/stage';
import { EmployeeService } from '../../../controller/service/employee.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-attestation-employee',
  templateUrl: './attestation-employee.component.html',
  styleUrls: ['./attestation-employee.component.css']
})
export class AttestationEmployeeComponent implements OnInit {

  employees: Employee[];
  employee: Employee;

  ngOnInit(): void {
    this.getAllEmployees();
  }

  title = 'appBootstrap';

  closeResult: string;

  constructor(private modalService: NgbModal, private employeeService: EmployeeService) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  public onOptionsSelected(value: Employee) {
    console.log(value);
  }

  generatePdf() {
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
  }

  downloadPdf() {
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).download();
  }

  generatorPdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open();
        break;
      case 'print': pdfMake.createPdf(documentDefinition).print();
        break;
      case 'download':
        pdfMake.createPdf(documentDefinition).download();
        break;
      default: pdfMake.createPdf(documentDefinition).open();
        break;
    }


  }

  getDocumentDefinition() {
    return {
      content: [
        {
          text: 'MARRAKECH LE 12/07/2020',
          margin: [350, 0, 0, 0],
          bold: true
        },
        {
          text: 'ATTESTATION DE TRAVAIL',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 150, 0, 100]
        },
        {
          text: [
            {
              text: [
                {
                  text: "Je, soussigné M.RACHID BENNIS , agissant en qualité de gérant de l'entreprise "
                },
                {
                  text: "CoreUi ",
                  color: "red"
                },
                {
                  text: ", atteste que ",
                },
                {
                  text: 'M. ' + this.employee.nom + ' ' + this.employee.prenom,
                  bold: true,
                  style: ['html-strong']
                },
                {
                  text: ', porteur de la CIN N° : '
                },
                {
                  text: this.employee.adresse,
                  italics: true,
                  style: ['html-em']
                },
                {
                  text: ' travaille au sein de notre société depuis le '
                },
                {
                  text: '1 Mars 2020 . en qualité de Developpeur .'
                }
              ],
              style: ['html-p']
            }
          ],
        },
        {
          text: [
            {
              text: 'M. ' + this.employee.nom + ' ' + this.employee.prenom,
              bold: true,
              style: ['html-strong']
            },
            {
              text: ' est sous contrat à durée indéterminée (CDI) depuis la date mentionnée ci-dessus et titularisé depuis le 1er Décembre 2013.'
            }
          ],
          margin: [0, 30, 0, 0],
          style: ['html-p']
        },
        {
          text: 'M. RACHID BENNIS',
          alignment: 'right',
          bold: true,
          margin: [0, 170, 0, 0],
          style: ['html-strong']
        }
      ],
      styles: {
        name: {
          fontSize: 16,
          bold: true
        }
      }
    };
  }

  /*
  Download the PDF : pdfMake.createPdf(docDefinition).download();
  Open the PDF in new window : pdfMake.createPdf(docDefinition).open(); 
  Open PDF in same window : pdfMake.createPdf(docDefinition).open({}, window);
  Print the PDF: pdfMake.createPdf(docDefinition).print();
  */


}
