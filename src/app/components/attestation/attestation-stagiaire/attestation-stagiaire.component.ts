import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../../../controller/model/stagiaire';
import { EquipeItem } from '../../../controller/model/equipe-item';
import { StagiaireService } from '../../../controller/service/stagiaire.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttestationService } from '../../../controller/service/attestation.service';

@Component({
  selector: 'app-attestation-stagiaire',
  templateUrl: './attestation-stagiaire.component.html',
  styleUrls: ['./attestation-stagiaire.component.css']
})
export class AttestationStagiaireComponent implements OnInit {

  closeResult: string;
  equipeItem: EquipeItem;
  stagiaires:Stagiaire[];

  constructor(private attestationService:AttestationService,private modalService: NgbModal) { }

  ngOnInit(): void {
     this.getAllStagiaires();
  }

  public getAllStagiaires(){
    this.attestationService.findStagiaireAndEquipeItem().subscribe(
      data => {
        this.stagiaires = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  public get stagiaire(){
    return this.attestationService.stagiaire;
  }

  public set stagiaire(value:Stagiaire){
     this.attestationService.stagiaire=value;
  }

  public saveHTML(){
    this.attestationService.generateReportStagiaire('html');
  }

  public savePDF(){
    this.attestationService.generateReportStagiaire('pdf');
  }
  
  public onOptionsSelected(value: Stagiaire){
    console.log(value);
  }

  open(content) {
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

}
