import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorActivityRoutingModule } from './visitor-activity-routing.module';
import { VisitorActivityComponent } from './visitor-activity.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VisitorActivityComponent
  ],
  imports: [
    CommonModule,
    VisitorActivityRoutingModule,
    SharedModule
  ]
})
export class VisitorActivityModule { }
