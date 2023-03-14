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
}
