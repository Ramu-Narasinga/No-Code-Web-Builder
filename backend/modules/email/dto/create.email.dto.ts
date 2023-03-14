export enum Status {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE'
}

export interface CreateEmail {
  title: string;
  description: string;
  status: Status;
  html: string;
  css: string;
  userId: number;
}