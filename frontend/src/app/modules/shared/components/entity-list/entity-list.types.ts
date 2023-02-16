export enum Status {
  ACTIVE = "ACTIVE",
  DRAFT = "DRAFT"
}

export type Entity = {
  id: number;
  title: string;
  description: string;
  status: Status
  createdAt: string;
  css: string;
  html: string;
  updatedAt: string;
  userId: number;
}
