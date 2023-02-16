import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateEntityModalData } from '../shared/components/entity-create-modal/entity-create.types';
import { Entity } from '../shared/components/entity-list/entity-list.types';
import { EntityService } from '../shared/services/entity.service';
import { WebsiteService } from './website.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  baseEditUrl = '/dashboard/website/edit';

  websites: Entity[] = [];

  entityTitle = 'Websites';

  createModal: Observable<{title: string, description: string}> = {} as Observable<{title: string, description: string}>;

  constructor(
    private websiteService: WebsiteService,
    private entityService: EntityService
  ) {}

  ngOnInit(): void {
    this.loadWebsitesList();
    this.listenToCreateWebsite();
    this.listenToDeleteWebsite();
    this.listenToUpdateWebsite();
  }

  listenToCreateWebsite() {

    this.entityService.onCreateModal().subscribe({
      next: (websiteData) => {
        this.createWebsite(websiteData);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => null,
    });
  }


  listenToDeleteWebsite() {
    this.entityService.onDeleteEntity().subscribe({
      next: (websiteData) => {
        this.deleteWebsite(websiteData);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => null,
    });
  }

  listenToUpdateWebsite() {
    this.entityService.onUpdateEntity().subscribe({
      next: (websiteData) => {
        this.updateWebsite(websiteData);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => null,
    });
  }

  loadWebsitesList() {
    this.websiteService.getWebsites()
      .subscribe(res => {
        this.websiteService.setWebsites(res);
        this.websites = this.websiteService.websites;
    })
  }

  modalTitle = 'Create Website';

  createWebsite(createWebsiteModalData: CreateEntityModalData) {
    this.websiteService.createWebsite(createWebsiteModalData)
    .subscribe((res: {website: Entity} | null) => {
      if (res && res.website)
        this.websiteService.addNewWebsite(res.website);
    });
  }

  deleteWebsite(deleteWebsite: {id: number}){
    this.websiteService.deleteWebsite(deleteWebsite)
    .subscribe((res:  Entity | null) => {
      if (res && res.id)
        this.websiteService.removeWebsiteById(res.id);
    });
  }

  updateWebsite(updateWebsite: {id: number, title: string, description: string, status: string}) {
    this.websiteService.updateWebsite(updateWebsite)
    .subscribe((res:  Entity | null) => {
      if (res && res.id)
        this.websiteService.updateWebsiteById(res);
    });
  }
}
