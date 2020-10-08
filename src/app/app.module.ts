import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { StagiaireComponent } from './components/stagiaire/stagiaire.component';
import { StagiaireCreateComponent } from './components/stagiaire/stagiaire-create/stagiaire-create.component';
import { StagiaireListComponent } from './components/stagiaire/stagiaire-list/stagiaire-list.component';
import { AttestationStagiaireComponent } from './components/attestation/attestation-stagiaire/attestation-stagiaire.component';
import { AttestationEmployeeComponent } from './components/attestation/attestation-employee/attestation-employee.component';
import { StageComponent } from './components/stage/stage.component';
import { StageCreateComponent } from './components/stage/stage-create/stage-create.component';
import { StageListComponent } from './components/stage/stage-list/stage-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeCongesComponent } from './components/type-conges/type-conges.component';
import { TypeCongeCreateComponent } from './components/type-conges/type-conge-create/type-conge-create.component';
import { TypeCongeListComponent } from './components/type-conges/type-conge-list/type-conge-list.component';
import { DemandeCongesComponent } from './components/demande-conges/demande-conges.component';
import { DemandeCongeCreateComponent } from './components/demande-conges/demande-conge-create/demande-conge-create.component';
import { DemandeCongeListComponent } from './components/demande-conges/demande-conge-list/demande-conge-list.component';
import { DepartementsComponent } from './components/departements/departements.component';
import { DepartementCreateComponent } from './components/departements/departement-create/departement-create.component';
import { DepartementListComponent } from './components/departements/departement-list/departement-list.component';
import { DesignationsComponent } from './components/designations/designations.component';
import { DesignationCreateComponent } from './components/designations/designation-create/designation-create.component';
import { DesignationListComponent } from './components/designations/designation-list/designation-list.component';

import { from } from 'rxjs';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAuth } from './controller/model/user-auth';
import { InterceptorService } from './controller/service/auth/interceptor.service';
import { AuthGuard } from './controller/service/auth/auth.guard';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeComponent,
    StagiaireComponent,
    StagiaireCreateComponent,
    StagiaireListComponent,
    AttestationStagiaireComponent,
    AttestationEmployeeComponent,
    StageComponent,
    StageCreateComponent,
    StageListComponent,
    TypeCongesComponent,
    TypeCongeCreateComponent,
    TypeCongeListComponent,
    DemandeCongesComponent,
    DemandeCongeCreateComponent,
    DemandeCongeListComponent,
    DepartementsComponent,
    DepartementCreateComponent,
    DepartementListComponent,
    DesignationsComponent,
    DesignationCreateComponent,
    DesignationListComponent
   
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,

  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }