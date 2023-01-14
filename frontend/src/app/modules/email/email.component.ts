import { Component } from '@angular/core';
import { Entity, Status } from '../shared/entity-list/entity-list.component';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {

  baseEditUrl = '/dashboard/email/edit';

  // TODO: to be fetched by api that only lists - status, title, description, pull whats needed
  emails: Entity[] = [{
    id: 1,
    title: "Email One",
    description: "Sample description one",
    status: Status.DRAFT
  }, {
    id: 2,
    title: "Email two",
    description: "Sample description two",
    status: Status.DRAFT
  }, {
    id: 3,
    title: "Email three",
    description: "Sample description three",
    status: Status.DRAFT
  }];
}
