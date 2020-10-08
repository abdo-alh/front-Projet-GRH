import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AttestationEmployeeComponent } from './components/attestation/attestation-employee/attestation-employee.component';
import { AttestationStagiaireComponent } from './components/attestation/attestation-stagiaire/attestation-stagiaire.component';
import { DemandeCongesComponent } from './components/demande-conges/demande-conges.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { StageComponent } from './components/stage/stage.component';
import { StagiaireComponent } from './components/stagiaire/stagiaire.component';
import { TypeCongesComponent } from './components/type-conges/type-conges.component';
// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './controller/service/auth/auth.guard';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';



import { DepartementsComponent } from './components/departements/departements.component';
import { DesignationsComponent } from './components/designations/designations.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  //{
  //  path: 'register',
  //  component: RegisterComponent,
  //  data: {
  //    title: 'Register Page'
  //  }
  //},
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'employee',
        component: EmployeeComponent
      },
      {
        path: 'stagiaire',
        component: StagiaireComponent
      },
      {
        path: 'user-profile',
        component: UserProfileComponent
      },
      {
        path: 'stage',
        component: StageComponent
      },
      {
        path: "attestationEmp",
        component: AttestationEmployeeComponent
      },
      {
        path: "attestationStg",
        component: AttestationStagiaireComponent
      },
      {
        path:"typeconge",
        component: TypeCongesComponent
      },
      {
        path:"demandeConge",
        component: DemandeCongesComponent
      },
      {
        path:"departement",
        component: DepartementsComponent
      },
      {
        path:"designation",
        component: DesignationsComponent
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
