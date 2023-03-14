import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'
import { EntityService } from '../../services/entity.service';

export enum Status {
  ACTIVE = "ACTIVE",
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

  constructor(
    private router: Router,
    private entityService: EntityService
  ) { }

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

  handleEntityStatusChange(status, entity: Entity) {
    this.entityService.triggerUpdateEntity({
      id: entity.id,
      title: entity.title,
      description: entity.description,
      status: status
    });
  }

  handleEntityStatusClick(event: MouseEvent) {
    event.stopPropagation();
  }

  handleEntityDelete(event: MouseEvent, entityId: number) {
    event.stopPropagation();
    this.entityService.trigerDeleteEntity({
      id: entityId
    });
  }
}
