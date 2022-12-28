enum Status {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE'
}

export interface CreateWebsiteDto {
  title: string;
  description: string;
  status: Status;
  html: string;
  css: string;
  userId: number;
}