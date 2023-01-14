import { Component, Input } from '@angular/core';

export enum Status {
  PUBLISHED = "PUBLISHED",
  DRAFT = "DRAFT"
}

export type Entity = {
  id: number;
  title: string;
  description: string;
  status: Status
}

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent {

  @Input() entities: Entity[] = [];
  @Input() baseEditUrl: string = '';

  public get Status(): typeof Status {
    return Status;
  }
}
