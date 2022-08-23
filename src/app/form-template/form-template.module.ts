import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormTemplateRoutingModule } from './form-template-routing.module';
import { BasicsComponent } from './basics/basics.component';


@NgModule({
  declarations: [
    BasicsComponent
  ],
  imports: [
    CommonModule,
    FormTemplateRoutingModule
  ]
})
export class FormTemplateModule { }
