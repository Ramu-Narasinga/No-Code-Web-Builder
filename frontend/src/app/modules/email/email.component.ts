import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateEntityModalData } from '../shared/components/entity-create-modal/entity-create.types';
import { Entity } from '../shared/components/entity-list/entity-list.component';
import { EntityService } from '../shared/services/entity.service';
import { EmailService } from './email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit, OnDestroy {

  baseEditUrl = '/dashboard/email/edit';

  emails: Entity[] = [];

  entityTitle = 'Emails';

  createModal: Observable<{title: string, description: string}> = {} as Observable<{title: string, description: string}>;

  constructor(
    private emailService: EmailService,
    private entityService: EntityService
  ) {}

  ngOnInit(): void {
    this.loadEmailsList();
    this.listenToCreateEmail();
    this.listenToDeleteEmail();
    this.listenToUpdateWebsite();
  }

  ngOnDestroy(): void {
    this.createEmailListener.unsubscribe();
    this.deleteEmailListener.unsubscribe();
    this.updateEmailListener.unsubscribe();
  }

  loadEmailsList() {
    this.emailService.getEmails()
      .subscribe(res => {
        console.log("res in ngoninit", res);
        this.emailService.setEmails(res ?? []);
        this.emails = this.emailService.emails;
    })
  }

  createEmailListener;
  listenToCreateEmail() {
    console.log("this gets triggered", this.createModal, "INSIDE EMAIL COMPONENT");
    this.createEmailListener = this.entityService.onCreateModal().subscribe({
      next: (emailData) => {
        console.log(emailData);
        this.createEmail(emailData);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }


  deleteEmailListener;
  listenToDeleteEmail() {
    this.deleteEmailListener = this.entityService.onDeleteEntity().subscribe({
      next: (emailData) => {
        console.log(emailData);
        this.deleteEmail(emailData);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  updateEmailListener;
  listenToUpdateWebsite() {
    this.updateEmailListener = this.entityService.onUpdateEntity().subscribe({
      next: (websiteData) => {
        console.log(websiteData);
        this.updateEmail(websiteData);
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }


  showCreateModal = false;
  modalTitle = 'Create Email';

  toggleCreateModal(showModal) {
    this.showCreateModal = showModal;
  }

  createEmail(createEmailModalData: CreateEntityModalData) {
    console.log("got create modal data", createEmailModalData);
    this.emailService.createEmail(createEmailModalData)
    .subscribe((res: {email: Entity} | null) => {
      console.log("res after creating email", res);
      if (res && res.email) {
        this.emailService.addNewEmail(res.email);
      }
    });
  }

  deleteEmail(deleteEmail: {id: number}){
    this.emailService.deleteEmail(deleteEmail)
    .subscribe((res: Entity | null) => {
      console.log("res after deleting email", res);
      if (res && res.id)
        this.emailService.removeEmailById(res.id);
    });
  }

  updateEmail(updateEmail: {id: number, title: string, description: string, status: string}) {
    console.log("updateWebsite in website::", updateEmail);
    this.emailService.updateEmail(updateEmail)
    .subscribe((res:  Entity | null) => {
      console.log("res after deleting website", res);
      if (res && res.id)
        this.emailService.updateEmailById(res);
    });
  }
}
