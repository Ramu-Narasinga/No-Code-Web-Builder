import { Component, OnInit } from '@angular/core';
import { CreateEntityModalData } from '../shared/components/entity-create-modal/entity-create.types';
import { Entity, Status } from '../shared/components/entity-list/entity-list.component';
import { WebsiteService } from './website.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  baseEditUrl = '/dashboard/website/edit';

  // TODO: to be fetched by api that only lists - status, title, description, pull whats needed
  websites: Entity[] = [];

  constructor(
    private websiteService: WebsiteService
  ) {}

  ngOnInit(): void {
    this.loadWebsitesList();
  }

  loadWebsitesList() {
    this.websiteService.getWebsites()
      .subscribe(res => {
        console.log("res in ngoninit", res);
        this.websites = res??[];
    })
  }

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
