enum ActivityType {
  FEEDBACK = 'FEEDBACK',
  ERROR = 'ERROR'
}

export interface CreateFeedbackActivity {
  activityType: ActivityType;
  ip: string;
  city: string;
  region: string;
  country: string;
  userId: number;
  websiteId: number;
  activityEvents?: any[];
  activityEventsUrl: string;
}