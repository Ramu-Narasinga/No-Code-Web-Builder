import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/services/shared.service';
import { CreateEntityModalData, CreateEntityPayload } from '../shared/components/entity-create-modal/entity-create.types';
import { Entity } from '../shared/components/entity-list/entity-list.component';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) { }

  emailUrl = `${environment.serverUrl}/email`;

  getEmailId() {
    return this.route.snapshot.paramMap.get('id')??-1;
  }

  getEmailByActiveId() {
    let emailId = +this.getEmailId();
    let foundWEmail = this.emails.filter(website => website.id == emailId);
    return foundWEmail ? foundWEmail[0] : null;
  }

  emails: Entity[] = []

  setEmails(emails) {
    this.emails = emails;
  }

  getEmails(): Observable<null> {

    return this.http.get<null>(this.emailUrl)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }

  private _getCreateEmailPayload(createEmailModalData): CreateEntityPayload {
    let createEmailPayload = {
      ...createEmailModalData,
    }
    return createEmailPayload;
  }

  createEmail(createEmailModalData: CreateEntityModalData): Observable<null> {

    return this.http.post<null>(this.emailUrl, this._getCreateEmailPayload(createEmailModalData))
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }
}
