import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { SharedService } from '../shared/services/shared.service';
import { VisitorActivity } from './visitor-activity.component';

@Injectable({
  providedIn: 'root'
})
export class VisitorActivityService {

  visitorActivityUrl = `${environment.serverUrl}/visitor-activity`;

  visitorActivities: VisitorActivity[] = [];

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
  ) { }

  setVisitorActivities(visitorActivities) {
    this.visitorActivities = visitorActivities;
  }

  getVisitorActivities() {
    return this.http.get<VisitorActivity[]>(`${this.visitorActivityUrl}`)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }
}
