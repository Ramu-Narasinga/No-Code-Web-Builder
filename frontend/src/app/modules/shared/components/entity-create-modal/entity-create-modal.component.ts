import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityService } from '../../services/entity.service';
import { CreateEntityModalData } from './entity-create.types';

@Component({
  selector: 'app-entity-create-modal',
  templateUrl: './entity-create-modal.component.html',
  styleUrls: ['./entity-create-modal.component.scss'],
})
export class EntityCreateModalComponent implements OnInit {
  @Input() showCreateModal: boolean = false;
  @Input() modalTitle: string = '';

  @Output() closeModal = new EventEmitter<boolean>();

  title = '';
  description = '';

  constructor(private entityService: EntityService) {}

  ngOnInit(): void {

  }

  onCloseModal() {
    this.closeModal.emit(true);
  }

  onCreate() {
    this.onCloseModal();
    this.entityService.setModalData({
      title: this.title,
      description: this.description
    })
  }
}
