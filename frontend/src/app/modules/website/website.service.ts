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
export class WebsiteService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) { }

  websiteUrl = `${environment.serverUrl}/website`;

  websites: Entity[] = []

  setWebsites(websites) {
    this.websites = websites;
  }

  getWebsiteId() {
    return this.route.snapshot.paramMap.get('id')??-1;
  }

  getWebsiteByActiveId() {
    let websiteId = +this.getWebsiteId();
    let foundWebsite = this.websites.filter(website => website.id == websiteId);
    return foundWebsite ? foundWebsite[0] : null;
  }

  getWebsites(): Observable<null> {

    return this.http.get<null>(this.websiteUrl)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }


  private _getCreateWebsitePayload(createWebsiteModalData): CreateEntityPayload {
    let createWebsitePayload = {
      ...createWebsiteModalData,
    }
    return createWebsitePayload;
  }

  createWebsite(createWebsiteModalData: CreateEntityModalData): Observable<null> {

    return this.http.post<null>(this.websiteUrl, this._getCreateWebsitePayload(createWebsiteModalData))
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }
}
