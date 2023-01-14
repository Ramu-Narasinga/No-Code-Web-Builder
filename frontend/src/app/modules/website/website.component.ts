import { Component } from '@angular/core';
import { Entity, Status } from '../shared/entity-list/entity-list.component';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent {
  // TODO: to be fetched by api that only lists - status, title, description, pull whats needed
  websites: Entity[] = [{
    title: "Website One",
    description: "Sample description one",
    status: Status.DRAFT
  }, {
    title: "Website two",
    description: "Sample description two",
    status: Status.DRAFT
  }, {
    title: "Website three",
    description: "Sample description three",
    status: Status.DRAFT
  }];
}
