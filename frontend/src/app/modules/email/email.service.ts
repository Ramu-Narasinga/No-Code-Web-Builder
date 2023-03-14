import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/services/shared.service';
import { CreateEntityModalData, CreateEntityPayload } from '../shared/components/entity-create-modal/entity-create.types';
import { Entity } from '../shared/components/entity-list/entity-list.component';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // TODO: if possible break this file iinto specific HTTP service files for readability

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
  ) { }

  emailUrl = `${environment.serverUrl}/email`;

  editorSaveEndpoint = ``;

  setEditorSaveEndpoint() {
    this.editorSaveEndpoint = `${this.emailUrl}/${this._getEmailId()}/builder`;
  }

  getEditorSaveEndpoint() {
    return this.editorSaveEndpoint;
  }


  activeEmail: Entity | null = {} as Entity;

  setActiveEmail(activeWebsite: Entity | null) {
    this.activeEmail = activeWebsite;
  }

  activeEmailId: number = -1;
  setActiveEmailId(activeEmailId: number) {
    this.activeEmailId = activeEmailId;
  }

  _getEmailId() {
    return this.activeEmailId;
  }

  getEmailByActiveId() {
    let emailId = +this._getEmailId();
    let foundWEmail = this.emails.filter(website => website.id == emailId);
    return foundWEmail ? foundWEmail[0] : null;
  }

  fetchWebsiteByActiveId() {
    return this.http.get<null>(`${this.emailUrl}/${this._getEmailId()}`)
    .pipe(
      catchError(this.sharedService.handleError)
    );
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

  addNewEmail(email: Entity) {
    this.emails.push(email);
  }

  createEmail(createEmailModalData: CreateEntityModalData): Observable<null> {

    return this.http.post<null>(this.emailUrl, this._getCreateEmailPayload(createEmailModalData))
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }

  deleteEmail(deleteEmail: {id: number}) {
    return this.http.delete<null>(`${this.emailUrl}/${deleteEmail.id}`)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }

  removeEmailById(id: number) {
    let index = this.emails.findIndex(website => website.id == id);
    this.emails.splice(index, 1);
  }

  updateEmailById(updatedWebsite) {
    let index = this.emails.findIndex(website => website.id == updatedWebsite.id);
    this.emails.splice(index, 1, updatedWebsite);
  }

  updateEmail(updateEmail: {id: number, title: string, description: string, status: string}) {
    return this.http.put<null>(`${this.emailUrl}`, updateEmail)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }
}
