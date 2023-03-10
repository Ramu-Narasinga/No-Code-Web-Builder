import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import { RouterModule } from '@angular/router';
import { EnitityEditorComponent } from './components/enitity-editor/enitity-editor.component';
import { EntityCreateModalComponent } from './components/entity-create-modal/entity-create-modal.component';
import { FormsModule } from '@angular/forms';
import { EntityComponent } from './components/entity/entity.component';
import { VisitorActivityModalComponent } from './components/visitor-activity-modal/visitor-activity-modal.component';

@NgModule({
  declarations: [
    EntityListComponent,
    SideBarComponent,
    EnitityEditorComponent,
    EntityCreateModalComponent,
    EntityComponent,
    VisitorActivityModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    EntityListComponent,
    SideBarComponent,
    EnitityEditorComponent,
    EntityCreateModalComponent,
    EntityComponent,
    VisitorActivityModalComponent
  ]
})
export class SharedModule { }
