import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'

export enum Status {
  PUBLISHED = "PUBLISHED",
  DRAFT = "DRAFT"
}

export type Entity = {
  id: number;
  title: string;
  description: string;
  status: Status
  createdAt: string;
  css: string;
  html: string;
  updatedAt: string;
  userId: number;
}

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  @Input() entities: Entity[] = [];
  @Input() baseEditUrl: string = '';

  @Output() deleteEntity = new EventEmitter<{id: number}>();

  public get Status(): typeof Status {
    return Status;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("this.route in entity list", this.router.url);
  }

  getQueryParams() {
    if (this.router.url.includes('email')) {
      return {
        'isEditorMode': false
      }
    } else {
      return {};
    }
  }

  handleEntityStatus(event: MouseEvent) {
    event.stopPropagation();
  }

  handleEntityDelete(event: MouseEvent, entityId: number) {
    event.stopPropagation();
    this.deleteEntity.emit({id: entityId});
  }
}
