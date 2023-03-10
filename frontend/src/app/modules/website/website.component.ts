import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateEntityModalData } from '../shared/components/entity-create-modal/entity-create.types';
import { Entity, Status } from '../shared/components/entity-list/entity-list.component';
import { EntityService } from '../shared/services/entity.service';
import { WebsiteService } from './website.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit, OnDestroy {

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

  ngOnDestroy(): void {
    this.createWebsiteListener.unsubscribe();
    this.deleteWebsiteListener.unsubscribe();
    this.updateWebsiteListener.unsubscribe();
  }

  createWebsiteListener;
  listenToCreateWebsite() {

    console.log("this gets triggered", this.createModal, "INSIDE WEBSITE COMPONENT");

    this.createWebsiteListener = this.entityService.onCreateModal().subscribe({
      next: (websiteData) => {
        console.log(websiteData);
        this.createWebsite(websiteData);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  deleteWebsiteListener;
  listenToDeleteWebsite() {
    this.deleteWebsiteListener = this.entityService.onDeleteEntity().subscribe({
      next: (websiteData) => {
        console.log(websiteData);
        this.deleteWebsite(websiteData);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  updateWebsiteListener;
  listenToUpdateWebsite() {
    this.updateWebsiteListener = this.entityService.onUpdateEntity().subscribe({
      next: (websiteData) => {
        console.log(websiteData);
        this.updateWebsite(websiteData);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  loadWebsitesList() {
    this.websiteService.getWebsites()
      .subscribe(res => {
        console.log("res in ngoninit", res);
        this.websiteService.setWebsites(res);
        this.websites = this.websiteService.websites;
    })
  }

  modalTitle = 'Create Website';

  createWebsite(createWebsiteModalData: CreateEntityModalData) {
    console.log("got create modal data", createWebsiteModalData);
    this.websiteService.createWebsite(createWebsiteModalData)
    .subscribe((res: {website: Entity} | null) => {
      console.log("res after creating website", res);
      if (res && res.website)
        this.websiteService.addNewWebsite(res.website);
    });
  }

  deleteWebsite(deleteWebsite: {id: number}){
    console.log("delete in website::", deleteWebsite);
    this.websiteService.deleteWebsite(deleteWebsite)
    .subscribe((res:  Entity | null) => {
      console.log("res after deleting website", res);
      if (res && res.id)
        this.websiteService.removeWebsiteById(res.id);
    });
  }

  updateWebsite(updateWebsite: {id: number, title: string, description: string, status: string}) {
    console.log("updateWebsite in website::", updateWebsite);
    this.websiteService.updateWebsite(updateWebsite)
    .subscribe((res:  Entity | null) => {
      console.log("res after deleting website", res);
      if (res && res.id)
        this.websiteService.updateWebsiteById(res);
    });
  }
}
