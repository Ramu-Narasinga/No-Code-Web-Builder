import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/services/shared.service';
import { CreateEntityModalData, CreateEntityPayload } from '../shared/components/entity-create-modal/entity-create.types';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
  ) { }

  emailUrl = `${environment.serverUrl}/email`;

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
