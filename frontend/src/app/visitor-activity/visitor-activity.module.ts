import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorActivityRoutingModule } from './visitor-activity-routing.module';
import { VisitorActivityComponent } from './visitor-activity.component';


@NgModule({
  declarations: [
    VisitorActivityComponent
  ],
  imports: [
    CommonModule,
    VisitorActivityRoutingModule
  ]
})
export class VisitorActivityModule { }
