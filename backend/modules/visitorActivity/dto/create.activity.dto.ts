enum ActivityType {
  FEEDBACK = 'FEEDBACK',
  ERROR = 'ERROR'
}

export interface CreateFeedbackActivity {
  activityType: ActivityType;
  city: string;
  region: string;
  country: string;
  userId: number;
  websiteId: number;
  activityEvents: string;
}