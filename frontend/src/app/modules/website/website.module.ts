import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard'

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { ConfigurationComponent } from './configuration/configuration.component';


@NgModule({
  declarations: [
    WebsiteComponent,
    EditComponent,
    ConfigurationComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    ClipboardModule
  ]
})
export class WebsiteModule { }
