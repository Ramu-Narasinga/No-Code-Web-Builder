import { Component, Input } from '@angular/core';
import { SendEmailService } from './send-email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent {

  recipients = [];
  emailSubject;
  id;
  emailId;

  @Input()
  get emailMeta(): any { return this._emailMeta; }
  set emailMeta(emailMeta: any) {
    this._emailMeta = emailMeta;
    if (this._emailMeta) {
      this.emailSubject = this._emailMeta.subject;
      this.recipients = this._emailMeta.recipients;
      this.id = this._emailMeta.id;
      this.emailId = this._emailMeta.emailId;
    }
  }
  private _emailMeta: any;

  constructor(private sendEmailService: SendEmailService) { }

  saveEmailSubject(subject) {
    this.emailSubject = subject;
    console.log("about to call saveEmailSubject", this.emailSubject, this.id, this.emailId);
    this.sendEmailService.saveEmailSubject(this.emailSubject, this.id, this.emailId)
    .subscribe(res => {
      console.log("successfully saved email subject");
    });

    // this.sendEmailService.saveEmailRecipients(this.recipients);
    // this.sendEmailService.sendEmail()
  }

  onTagAdded(tag) {
    console.log("tag added", tag);
  }

  onTagRemoved(tag) {
    console.log("tag removed", tag);
  }
}
