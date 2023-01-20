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
  "activityEventsUrl": string;
  "activityEvents"?: []
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

  handleReplayClick(index, activityEventsUrl) {
    this.getVisitorActivityEvents(index, activityEventsUrl.split('/')[1]);
  }


  getVisitorActivityEvents(index, activityEventsName) {

    let playerEl: HTMLElement = document.getElementById('va-ep-'+index) ?? {} as HTMLElement;

    let btnEl: HTMLElement = document.getElementById('va-ep-btn-'+index) ?? {} as HTMLElement;
    btnEl.style.display = 'none';

    this.visitorActivityService.getVisitorActivityEvents(activityEventsName)
    .subscribe(res => {

      let rrwebPlayer = new window["rrwebPlayer"]({
        target: playerEl, // customizable root element
        props: {
          events: res,
        },
      });

      rrwebPlayer.$set({
        width: '550',
        height: '150',
      });
      let el: any = document.getElementsByClassName('rr-player')[index];
      el.style.height = '150px';
      rrwebPlayer.triggerResize();
    });
  }
}
