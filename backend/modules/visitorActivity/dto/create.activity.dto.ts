enum ActivityType {
  FEEDBACK = 'FEEDBACK',
  ERROR = 'ERROR'
}

export interface CreateVisitorActivity {
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

export interface CreateFeedback {
  rating: number;
  comment?: string;
  endpoint?: string;
}

export interface CreateFeedbackVisitorActivity extends CreateVisitorActivity, CreateFeedback {}