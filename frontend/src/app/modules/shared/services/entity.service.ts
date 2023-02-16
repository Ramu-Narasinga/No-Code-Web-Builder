import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CreateEntityModalData } from '../components/entity-create-modal/entity-create.types';
import { UpdateEntity, DeleteEntity } from './entity.service.types';
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

  deleteEntity = new Subject<DeleteEntity>();

  trigerDeleteEntity(deleteEntityData) {
    this.deleteEntity.next(deleteEntityData);
  }

  onDeleteEntity() {
    return this.deleteEntity.asObservable();
  }

  updateEntity = new Subject<UpdateEntity>();

  triggerUpdateEntity(updateEntityData) {
    this.updateEntity.next(updateEntityData);
  }

  onUpdateEntity() {
    return this.updateEntity.asObservable();
  }

}
