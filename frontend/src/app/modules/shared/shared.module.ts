import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './entity-list/entity-list.component';



@NgModule({
  declarations: [
    EntityListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EntityListComponent
  ]
})
export class SharedModule { }
