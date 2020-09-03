import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Stagiaire } from '../../../controller/model/stagiaire';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { EquipeItem } from '../../../controller/model/equipe-item';
import { StagiaireService } from '../../../controller/service/stagiaire.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-attestation-stagiaire',
  templateUrl: './attestation-stagiaire.component.html',
  styleUrls: ['./attestation-stagiaire.component.css']
})
export class AttestationStagiaireComponent implements OnInit {

  closeResult: string;
  equipeItem: EquipeItem;
  stagiaires:Stagiaire[];

  constructor(private modalService: NgbModal,private stagiaireService:StagiaireService) { }

  ngOnInit(): void {
    
  }

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
  
  public onOptionsSelected(value: Stagiaire){
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
          text: 'ATTESTATION DE STAGE',
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
                  text: "Je, soussigné "
                },
                {
                  text: 'M. ' + this.equipeItem.stage.encadrent.nom + ' ' + this.equipeItem.stage.encadrent.prenom,
                  bold: true,
                  style: ['html-strong']
                },
                {
                  text: ' au sein de l’entreprise '
                },
                {
                  text: "KechTrip ",
                  color: "red"
                },
                {
                  text: "sise Résidence Attrani - Avenue Hassan II - Guéliz 40 010 Marrakech atteste par la présente que ",
                },
                {
                  text: 'M. ' + this.equipeItem.stagiaire.nom + ' ' + this.equipeItem.stagiaire.prenom,
                  bold: true,
                  style: ['html-strong']
                },
                {
                  text: ' a réalisé un stage dans le département Informatique de notre entreprise du 03/09/2019 au 30/09/2019.'
                },
                {
                  text: " Durant son stage, il a montré capacités évidentes d’initiatives et d'adaptation aux différents types de tâches qui lui ont été demandées d'assurer. "
                }
              ],
              style: ['html-p']
            }
          ],
        },
        {
          text: [
            {
              text: 'Cette attestation est délivrée à l’intéressé pour valoir ce que de droit.'
            }
          ],
          margin: [0, 30, 0, 0],
          style: ['html-p']
        },
        {
          text: 'M. ' + this.equipeItem.stage.encadrent.nom + ' ' + this.equipeItem.stage.encadrent.prenom,
          bold: true,
          style: ['html-strong'],
          margin: [0, 170, 0, 0]
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

}
