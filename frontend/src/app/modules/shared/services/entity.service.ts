import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CreateEntityModalData } from '../components/entity-create-modal/entity-create.types';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor() { }


  createModal = new Subject<CreateEntityModalData>();

  title = '';
  description = '';
  setModalData(modalData) {
    this.title = modalData.title;
    this.description = modalData.description;
    this.createModal.next({ title: this.title, description: this.description });
  }

  onCreateModal() {
    return this.createModal.asObservable();
  }


  deleteEntity = new Subject<{id: number}>();

  trigerDeleteEntity(deleteEntityData) {
    this.deleteEntity.next(deleteEntityData);
  }

  onDeleteEntity() {
    return this.deleteEntity.asObservable();
  }
}
