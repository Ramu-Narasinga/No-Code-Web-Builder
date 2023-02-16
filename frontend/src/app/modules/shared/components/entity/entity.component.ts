import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Entity } from '../entity-list/entity-list.types';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent {
  @Input() entities: Entity[] = [];
  @Input() baseEditUrl: string = '';
  @Input() modalTitle = '';
  @Input() entityTitle = '';

  showCreateModal = false;

  toggleCreateModal(showModal) {
    this.showCreateModal = showModal;
  }
}
