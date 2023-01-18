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
export class WebsiteService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
  ) { }

  websiteUrl = `${environment.serverUrl}/website`;

  editorSaveEndpoint = ``;

  setEditorSaveEndpoint() {
    this.editorSaveEndpoint = `${this.websiteUrl}/${this._getWebsiteId()}/builder`;
  }

  getEditorSaveEndpoint() {
    return this.editorSaveEndpoint;
  }



  activeWebsite: Entity | null = {} as Entity;

  setActiveWebsite(activeWebsite: Entity | null) {
    this.activeWebsite = activeWebsite;
  }

  activeWebsiteId: number = -1;
  setActiveWebsiteId(activeWebsiteId: number) {
    this.activeWebsiteId = activeWebsiteId
  }

  _getWebsiteId() {
    return this.activeWebsiteId;
  }

  getWebsiteByActiveId() {
    let websiteId = +this._getWebsiteId();
    let foundWebsite = this.websites.filter(website => website.id == websiteId);
    return foundWebsite.length == 1 ? foundWebsite[0] : null;
  }

  fetchWebsiteByActiveId() {
    return this.http.get<null>(`${this.websiteUrl}/${this._getWebsiteId()}`)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }


  websites: Entity[] = []

  getWebsites(): Observable<null> {
    return this.http.get<null>(this.websiteUrl)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }

  setWebsites(websites) {
    this.websites = websites;
  }


  private _getCreateWebsitePayload(createWebsiteModalData): CreateEntityPayload {
    let createWebsitePayload = {
      ...createWebsiteModalData,
    }
    return createWebsitePayload;
  }

  addNewWebsite(website: Entity) {
    this.websites.push(website);
  }

  removeWebsiteById(id: number) {
    let index = this.websites.findIndex(website => website.id == id);
    this.websites.splice(index, 1);
  }

  createWebsite(createWebsiteModalData: CreateEntityModalData): Observable<null> {

    return this.http.post<null>(this.websiteUrl, this._getCreateWebsitePayload(createWebsiteModalData))
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }

  deleteWebsite(deleteWebsite: {id: number}) {
    return this.http.delete<null>(`${this.websiteUrl}/${deleteWebsite.id}`)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }
}
