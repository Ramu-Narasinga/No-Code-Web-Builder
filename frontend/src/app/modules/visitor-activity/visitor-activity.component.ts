import { Component } from '@angular/core';

enum Activitytype {
  ERROR = 'ERROR',
  FEEDBACK = 'FEEDBACK'
}

type VisitorActivity = {
  city: string;
  region: string;
  country: string;
  activityType: Activitytype
  rating?: number;
  comment?: string;
  endpoint?: string;
}
@Component({
  selector: 'app-visitor-activity',
  templateUrl: './visitor-activity.component.html',
  styleUrls: ['./visitor-activity.component.scss']
})
export class VisitorActivityComponent {
  visitorActivities: VisitorActivity[] = [{
    city: "Luton",
    region: "Bedfordshire",
    country: "England",
    activityType: Activitytype.FEEDBACK,
    rating: 5,
    comment: "Awesome product",
  }, {
    city: "Luton",
    region: "Bedfordshire",
    country: "England",
    activityType: Activitytype.ERROR,
    endpoint: "http:faulty-url"
  }, {
    city: "Luton",
    region: "Bedfordshire",
    country: "England",
    activityType: Activitytype.FEEDBACK,
    rating: 5,
    comment: "Awesome product",
  }]

  public get Activitytype(): typeof Activitytype {
    return Activitytype;
  }
}
