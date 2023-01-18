import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateEntityModalData } from '../shared/components/entity-create-modal/entity-create.types';
import { Entity } from '../shared/components/entity-list/entity-list.component';
import { EmailService } from './email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  baseEditUrl = '/dashboard/email/edit';

  emails: Entity[] = [];

  constructor(
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.loadEmailsList();
  }

  loadEmailsList() {
    this.emailService.getEmails()
      .subscribe(res => {
        console.log("res in ngoninit", res);
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
}
