import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  emailMetaUrl = `${environment.serverUrl}/email/meta`;
  emailMetaRecipient = `${environment.serverUrl}/email/meta/recipients`;

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
  ) { }

  saveEmailSubject(subject, id, emailId) {
    let saveEmailSubjectPayload = {
      subject,
      id,
      emailId
    }
    return this.http.put<null>(`${this.emailMetaUrl}`, saveEmailSubjectPayload)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }

  saveEmailRecipient(recipientEmail, emailMetaId) {
    let saveEmailRecipientPayload = {
      emailMetaId,
      recipientEmail
    }
    return this.http.put<null>(`${this.emailMetaRecipient}`, saveEmailRecipientPayload)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }

  deleteEmailRecipient(recipientEmail, recipients) {
    console.log("recipients:", recipients, "in deleteEmailRecipient", recipientEmail);
    let foundRecipientIndex = recipients.findIndex(recp => recp.recipientEmail == recipientEmail);
    let deletedRecipientId;
    console.log("foundRecipientIndex:", foundRecipientIndex);
    if (foundRecipientIndex != -1) {
      deletedRecipientId = recipients[foundRecipientIndex].id;
    }
    return this.http.delete<null>(`${this.emailMetaRecipient}/${deletedRecipientId}`)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }

  sendEmail(emailMetaId) {
    return this.http.post<null>(`${this.emailMetaUrl}/email/send`, { emailMetaId })
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }
}
