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
