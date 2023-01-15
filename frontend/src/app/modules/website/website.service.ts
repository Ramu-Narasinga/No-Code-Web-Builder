import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/services/shared.service';
import { CreateEntityModalData, CreateEntityPayload } from './website.types';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private authService: AuthService
  ) { }

  private _getCreateWebsitePayload(createWebsiteModalData): CreateEntityPayload {
    let createWebsitePayload = {
      ...createWebsiteModalData,
      userId: this.authService.getUserId()
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
