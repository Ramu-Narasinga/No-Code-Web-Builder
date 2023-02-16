import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'
import { EntityService } from '../../services/entity.service';
import { Status, Entity } from '../entity-list/entity-list.types';
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

  ngOnInit(): void { }

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
