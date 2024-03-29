import { Component, OnInit } from '@angular/core';
import { DemandeCongeService } from '../../../controller/service/demande-conge.service';
import { TypeCongeService } from '../../../controller/service/type-conge.service';
import { EmployeeService } from '../../../controller/service/employee.service';
import { TypeConge } from '../../../controller/model/type-conge.model';
import { Employee } from '../../../controller/model/employee';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demande-conge-create',
  templateUrl: './demande-conge-create.component.html',
  styleUrls: ['./demande-conge-create.component.css']
})
export class DemandeCongeCreateComponent implements OnInit {

  typeConge: TypeConge = new TypeConge();
  typeConges: TypeConge[];

  employee: Employee = new Employee();
  employees: Employee[];
  selectedFiles: FileList;
  currentFile: File;

  userFile;

  constructor(private demandeCongeService: DemandeCongeService, private typeCongeService: TypeCongeService,
    private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  private div2: boolean = true;
  private div5: boolean = false;
  private div1: boolean = true;
  private div3: boolean = true;
  private div4: boolean = true;


  ngOnInit(): void {
    this.getAllTypeConges();
    this.getAllEmployees();
    /*this.uploadForm = this.formBuilder.group({
      profile: ['']
    });*/
  }


  get demandeConge() {
    return this.demandeCongeService.demandeConge;
  }

  /*------------------------UPLOAD------------------------------------

  selectedFile: File;
  uploadForm: FormGroup;


  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    document.getElementById('lebel1').innerText = this.selectedFile.name;
    this.demandeConge.certificat = this.selectedFile.name.split('.').shift();
    this.uploadForm.get('profile').setValue(this.selectedFile);
  }

  uploadFile() {
    this.uploadForm.get('profile').setValue(this.selectedFile);
    console.log(this.selectedFile);
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    this.demandeCongeService.uploadFile(formData);
  }

  ------------------------------------------------------------------------*/

  toggle() {
    if (this.div2 == true && this.demandeConge.typeConge.libelle == 'maladie' && this.div3 == true && this.div4 == true) {

      this.div2 = false;
      this.div5 = true;
    console.log('good1');
    }
    else if( this.div1 == true && this.div2 == true && this.demandeConge.typeConge.libelle != 'maladie' ){
      this.div1 = true;
      this.div3 = true;
      this.div4 = true;
      this.div2 = false;
    }
    else if (this.div2 == false && this.div1 == true && this.div3 == false && this.div4 == false ) {
      this.div1 = true;
      this.div3 = true;
      this.div4 = true;
      this.div2 = false;
      console.log('good2');
    }
    else if (this.div1 == true && this.div2 == true && this.div3 == false && this.div4 == false && this.demandeConge.typeConge.libelle == 'maladie') {
      this.div1 = true;
      this.div3 = true;
      this.div4 = true;
      this.div2 = false;
      this.div5 = true;
      console.log('good3');
    }

  }

  togglee() {
    if (this.demandeConge.typeConge.libelle == 'maladie') {
      this.div1 = true;
      this.div3 = false;
      this.div4 = false;
      this.div2 = false;
      this.div5 = true;
    } else {
      this.div1 = true;
      this.div3 = false;
      this.div4 = false;
      this.div2 = false;
      this.div5 = false;
    }

  }

  togglees() {
    this.div1 = true;
    this.div2 = true;
    this.div3 = false;
    this.div4 = false;
  }





  public save() {
    if (this.demandeCongeService.demandeConge.id != null) {
      this.demandeCongeService.update();
      console.log("error");
    }
    else {
      //this.uploadFile();
      this.demandeCongeService.save(this.currentFile);
    }
  }

  public getAllTypeConges() {
    this.typeCongeService.getAllTypeConges().subscribe(
      data => {
        this.typeConges = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public onOptionsSelected(value: TypeConge) {
    if (this.demandeConge.typeConge.libelle == 'maladie') {
      this.div5 = true;
    }
    else {
      this.div5 = false;
    }

    console.log(this.demandeConge.typeConge.libelle);
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

  public onOptionsSelectedem(value: Employee) {
    console.log(value);
  }

  onFileSelected(event) {
    this.selectedFiles = event.target.files;
    this.currentFile = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

  }
}