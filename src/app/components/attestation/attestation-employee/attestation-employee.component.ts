import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../../../controller/model/employee';
import { Stage } from '../../../controller/model/stage';
import { EmployeeService } from '../../../controller/service/employee.service';
import { AttestationService } from '../../../controller/service/attestation.service';


@Component({
  selector: 'app-attestation-employee',
  templateUrl: './attestation-employee.component.html',
  styleUrls: ['./attestation-employee.component.css']
})
export class AttestationEmployeeComponent implements OnInit {

  employees: Employee[];
  closeResult = '';


  ngOnInit(): void {
    this.getAllEmployees();
  }

  constructor(private attestationService:AttestationService, private employeeService: EmployeeService,private modalService: NgbModal) { }


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

  public get employee(){
    return this.attestationService.employee;
  }

  public set employee(value: Employee) {
    this.attestationService.employee = value;
  }

  public saveHTML(){
    this.attestationService.generateReport('html');
  }

  public savePDF(){
    this.attestationService.generateReport('pdf');
  }

  public onOptionsSelected(value: Employee) {
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
