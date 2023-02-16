import { Component, OnInit } from '@angular/core';
import { CreateEntityModalData } from '../shared/components/entity-create-modal/entity-create.types';
import { Entity } from '../shared/components/entity-list/entity-list.types';
import { EmailService } from './email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  baseEditUrl = '/dashboard/email/edit';

  emails: Entity[] = [];

  entityTitle = 'Emails';

  constructor(
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.loadEmailsList();
  }

  loadEmailsList() {
    this.emailService.getEmails()
      .subscribe(res => {
        this.emailService.setEmails(res ?? []);
        this.emails = this.emailService.emails;
    })
  }

  showCreateModal = false;
  modalTitle = 'Create Email';

  toggleCreateModal(showModal) {
    this.showCreateModal = showModal;
  }

  createEmail(createEmailModalData: CreateEntityModalData) {
    this.emailService.createEmail(createEmailModalData)
    .subscribe((res: {email: Entity} | null) => {
      if (res && res.email) {
        this.emailService.addNewEmail(res.email);
      }
    });
  }

  deleteEmail(deleteEmail: {id: number}){
    this.emailService.deleteEmail(deleteEmail)
    .subscribe((res: Entity | null) => {
      if (res && res.id)
        this.emailService.removeEmailById(res.id);
    });
  }
}
