import { Component, OnInit } from '@angular/core';
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
        this.emails = res ?? [];
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
    .subscribe((res) => {
      console.log("res after creating email", res);
    });
  }
}
