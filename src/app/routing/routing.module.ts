import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalLayoutComponent } from '../layout/vertical';
//import { HorizontalLayoutComponent } from '../layout/horizontal';
import { PublicLayoutComponent } from '../layout/public';

import { MainPageComponentnt } from '../pages/main';
import { Page404Component } from '../pages/page-404';
import  { LoginComponent } from '../pages/login/login.component';
import { InvestordashboardComponent } from '../pages/investor/investordashboard/investordashboard.component';
import { DeveloperdashboardComponent } from '../pages/developer/developerdashboard/developerdashboard.component';
import { ProeprtyDetailsComponent } from '../pages/property/proeprty-details/proeprty-details.component';
import { AddpropertyComponent } from '../pages/developer/addproperty/addproperty.component';
import { PropertymanagerComponent } from '../pages/developer/propertymanager/propertymanager.component';

const VERTICAL_ROUTES: Routes = [
  { path: 'main', component: MainPageComponentnt },
  {path: 'investor',component: InvestordashboardComponent},
  {path: 'property/:id',component: ProeprtyDetailsComponent},
  {path: 'propertymanager',component: PropertymanagerComponent },
  {path: 'addproperty', component: AddpropertyComponent},
  { path: '**', component: Page404Component },
  
];

// const DEVELOPER_ROUTES: Routes = [
//   {path: 'propertymanager',component: DeveloperdashboardComponent },
//   {path: 'addproperty', component: AddpropertyComponent},

// ];





const PUBLIC_ROUTES: Routes = [

  {path: 'login', component: LoginComponent }


];

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/vertical/main',
    pathMatch: 'full'
  },
  {
    path: 'vertical',
    component: VerticalLayoutComponent,
    children: VERTICAL_ROUTES
  },
  // {
  //   path: 'developer',
  //   component: VerticalLayoutComponent,
  //   children: DEVELOPER_ROUTES
  // },
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: PUBLIC_ROUTES
  },
  {
    path: '**',
    component: VerticalLayoutComponent,
    children: VERTICAL_ROUTES
  }
];

@NgModule({
  imports: [

  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
