import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { LayoutModule } from '../layout/layout.module';


import { MainPageComponentnt } from './main';
import { Page404Component } from './page-404';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InvestordashboardComponent } from './investor/investordashboard/investordashboard.component';
import { DeveloperdashboardComponent } from './developer/developerdashboard/developerdashboard.component';
import { ProeprtyDetailsComponent } from './property/proeprty-details/proeprty-details.component';
import { AddpropertyComponent } from './developer/addproperty/addproperty.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    UIModule,
    LayoutModule
  ],
  declarations: [

    MainPageComponentnt,
    Page404Component,
    LoginComponent,
    SignupComponent,
    InvestordashboardComponent,
    DeveloperdashboardComponent,
    ProeprtyDetailsComponent,
    AddpropertyComponent
  ],
  exports: [ ],
  entryComponents: [ ]
})
export class PagesModule {}
