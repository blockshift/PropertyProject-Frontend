import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { LayoutModule } from '../layout/layout.module';
import { BasePageComponent } from './base-page';

import { MainPageComponentnt } from './main';
import { Page404Component } from './page-404';

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
    BasePageComponent,
    MainPageComponentnt,
    Page404Component
  ],
  exports: [ ],
  entryComponents: [ ]
})
export class PagesModule {}
