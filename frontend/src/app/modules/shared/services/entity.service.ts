import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CreateEntityModalData } from '../components/entity-create-modal/entity-create.types';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor() { }

  title = '';
  description = '';
  setModalData(modalData) {
    this.title = modalData.title;
    this.description = modalData.description;
  }


  createModalSubscriber(observer: Observer<CreateEntityModalData>) {

    console.log("inside subscriber", this.title, this.description);

    if (this.title && this.description) {
      observer.next({
        title: this.title,
        description: this.description
      });
    }

    return () => {
      this.title = '';
      this.description = '';
    }
  }

  createModal = new Observable(this.createModalSubscriber);
}
