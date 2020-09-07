import { Component, OnInit } from '@angular/core';
import { DemandeCongeService } from '../../../controller/service/demande-conge.service';
import { TypeCongeService } from '../../../controller/service/type-conge.service';
import { EmployeeService } from '../../../controller/service/employee.service';
import { TypeConge } from '../../../controller/model/type-conge.model';
import { Employee } from '../../../controller/model/employee';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-demande-conge-create',
  templateUrl: './demande-conge-create.component.html',
  styleUrls: ['./demande-conge-create.component.css']
})
export class DemandeCongeCreateComponent implements OnInit {
  
  typeConge:TypeConge = new TypeConge();
  typeConges:TypeConge[];

  employee:Employee = new Employee();
  employees:Employee[];

  constructor(private demandeCongeService: DemandeCongeService, private typeCongeService: TypeCongeService,
    private employeeService: EmployeeService) { }
 
   private div2: boolean = true;
   private div5: boolean = false;
   private div1: boolean = true;
   private div3: boolean = true;
   private div4: boolean = true;
  

  ngOnInit(): void {
    this.getAllTypeConges();
    this.getAllEmployees();
  }

  get demandeConge(){
    return this.demandeCongeService.demandeConge;
  }

  

  toggle(){
    if(this.div2 == true && this.demandeConge.typeConge.libelle == 'maladie')
    {
       
       this.div2 = false;
       this.div5 = true;
     //console.log(this.show);
    } 
    else if(this.div2 == false && this.div2 == false &&  this.div1 == false && this.div3 == false && this.div4 == false) {
     this.div1=true;
     this.div3=true;
     this.div4=true;
     this.div2=false;

    }
    else if(this.div1 ==true && this.div2 ==true)
    {
      this.div1=true;
      this.div3=true;
      this.div4=true;
      this.div2=false;
      this.div5=false;
    }
   
  }

  togglee(){
    if(this.demandeConge.typeConge.libelle == 'maladie')
    {
      this.div1=false;
      this.div3=false;
      this.div4=false;
      this.div2=false;
      this.div5=true; 
    } else {
      this.div1=false;
      this.div3=false;
      this.div4=false;
      this.div2=false;
      this.div5=false; 

    }
     
}

togglees()
{
  this.div1=true;
   this.div2=true;
   this.div3=false;
   this.div4=false;
}

public save() {
    if (this.demandeCongeService.demandeConge.id != null) {
      //this.equipeitemService.update();
      console.log("error");
    }
    else {
      this.demandeCongeService.save();
    }
}

public getAllTypeConges(){
  this.typeCongeService.getAllTypeConges().subscribe(
    data => {
      this.typeConges = data;
    },
    error => {
      console.log(error);
    }
  )
}

public onOptionsSelected(value: TypeConge){
  if(this.demandeConge.typeConge.libelle == 'maladie')
  {
    this.div5 = true;
  }
  else {
    this.div5 = false;
  }
  
  console.log(this.demandeConge.typeConge.libelle);
}

public getAllEmployees(){
  this.employeeService.getAllEmployees().subscribe(
    data => {
      this.employees = data;
    },
    error => {
      console.log(error);
    }
  )
}

public onOptionsSelectedem(value: Employee){
  console.log(value);
}

  
}

