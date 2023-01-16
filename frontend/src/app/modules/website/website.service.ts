import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/services/shared.service';
import { CreateEntityModalData, CreateEntityPayload } from './website.types';
@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
  ) { }

  private _getCreateWebsitePayload(createWebsiteModalData): CreateEntityPayload {
    let createWebsitePayload = {
      ...createWebsiteModalData,
    }
    return createWebsitePayload;
  }

  authSignupUrl = `${environment.serverUrl}/website`;

  createWebsite(createWebsiteModalData: CreateEntityModalData): Observable<null> {

    return this.http.post<null>(this.authSignupUrl, this._getCreateWebsitePayload(createWebsiteModalData))
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }
}
