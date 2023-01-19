import { Component, OnInit } from '@angular/core';
import { VisitorActivityService } from './visitor-activity.service';

enum Activitytype {
  ERROR = 'ERROR',
  FEEDBACK = 'FEEDBACK'
}

export type VisitorActivity = {
  "website": {
    "title": string,
    "id": number
  },
  "feedbackActivity": {
      "id": number,
      "rating": number,
      "comment": string,
      "visitorActivityId": number
  } | null,
  "errorActivity": {
    endpoint: string;
  } | null,
  "city": string,
  "id": number,
  "activityType": string,
  "region": string,
  "country": string,
  "activityEventsUrl": string
}
@Component({
  selector: 'app-visitor-activity',
  templateUrl: './visitor-activity.component.html',
  styleUrls: ['./visitor-activity.component.scss']
})
export class VisitorActivityComponent implements OnInit {

  public get Activitytype(): typeof Activitytype {
    return Activitytype;
  }

  visitorActivities: VisitorActivity[] = []

  constructor(private visitorActivityService: VisitorActivityService) { }

  ngOnInit(): void {
      this.getVisitorActivities();
  }

  getVisitorActivities() {
    this.visitorActivityService.getVisitorActivities()
      .subscribe(res => {
        console.log("res in ngoninit", res);
        this.visitorActivityService.setVisitorActivities(res);
        this.visitorActivities = this.visitorActivityService.visitorActivities;
    })
  }
}
