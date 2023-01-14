import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './entity-list/entity-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EntityListComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EntityListComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
