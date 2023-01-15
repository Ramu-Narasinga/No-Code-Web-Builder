import { Component } from '@angular/core';
import { Entity, Status } from '../shared/components/entity-list/entity-list.component';
import { WebsiteService } from './website.service';
import { CreateEntityModalData } from './website.types';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent {

  baseEditUrl = '/dashboard/website/edit';

  // TODO: to be fetched by api that only lists - status, title, description, pull whats needed
  websites: Entity[] = [{
    id: 1,
    title: "Website One",
    description: "Sample description one",
    status: Status.DRAFT
  }, {
    id: 2,
    title: "Website two",
    description: "Sample description two",
    status: Status.DRAFT
  }, {
    id: 3,
    title: "Website three",
    description: "Sample description three",
    status: Status.DRAFT
  }];

  constructor(
    private websiteService: WebsiteService
  ) {}


  showCreateModal = false;
  modalTitle = 'Create Website';

  toggleCreateModal(showModal) {
    this.showCreateModal = showModal;
  }

  createWebsite(createWebsiteModalData: CreateEntityModalData) {
    console.log("got create modal data", createWebsiteModalData);
    this.websiteService.createWebsite(createWebsiteModalData)
    .subscribe((res) => {
      console.log("res after creating website", res);
    });
  }
}
