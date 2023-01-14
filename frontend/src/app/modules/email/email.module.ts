import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    EmailComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule
  ]
})
export class EmailModule { }
