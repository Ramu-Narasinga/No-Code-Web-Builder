import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { SendEmailComponent } from './send-email/send-email.component';

@NgModule({
  declarations: [
    EmailComponent,
    EditComponent,
    SendEmailComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule,
    FormsModule,
    // BrowserAnimationsModule,
    TagInputModule,
  ]
})
export class EmailModule { }
