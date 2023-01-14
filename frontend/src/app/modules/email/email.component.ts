import { Component } from '@angular/core';
import { Entity, Status } from '../shared/entity-list/entity-list.component';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  // TODO: to be fetched by api that only lists - status, title, description, pull whats needed
  emails: Entity[] = [{
    title: "Email One",
    description: "Sample description one",
    status: Status.DRAFT
  }, {
    title: "Email two",
    description: "Sample description two",
    status: Status.DRAFT
  }, {
    title: "Email three",
    description: "Sample description three",
    status: Status.DRAFT
  }];
}
