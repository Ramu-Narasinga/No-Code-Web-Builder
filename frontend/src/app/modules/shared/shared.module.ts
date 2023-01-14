import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './entity-list/entity-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { RouterModule } from '@angular/router';
import { EnitityEditorComponent } from './enitity-editor/enitity-editor.component';

@NgModule({
  declarations: [
    EntityListComponent,
    SideBarComponent,
    EnitityEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EntityListComponent,
    SideBarComponent,
    EnitityEditorComponent
  ]
})
export class SharedModule { }
