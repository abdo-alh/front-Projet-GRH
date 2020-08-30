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
import { HttpClientModule } from '@angular/common/http';
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
import { FormsModule } from '@angular/forms';
import { EquipeitemComponent } from './components/equipeitem/equipeitem.component';
import { EquipeitemCreateComponent } from './components/equipeitem/equipeitem-create/equipeitem-create.component';
import { EquipeitemListComponent } from './components/equipeitem/equipeitem-list/equipeitem-list.component';
import { TypeCongesComponent } from './components/type-conges/type-conges.component';
import { TypeCongeCreateComponent } from './components/type-conges/type-conge-create/type-conge-create.component';
import { TypeCongeListComponent } from './components/type-conges/type-conge-list/type-conge-list.component';

  import { from } from 'rxjs';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    NgbModule
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
    EquipeitemComponent,
    EquipeitemCreateComponent,
    EquipeitemListComponent,
    TypeCongesComponent,
    TypeCongeCreateComponent,
    TypeCongeListComponent
   
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
