enum Status {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE'
}

export interface CreateWebsiteDto {
  title: string;
  description: string;
  userId: number;
}

export interface UpdateWebsiteDto {
  id: number;
  title?: string;
  description?: string;
  status?: Status;
  html?: string;
  css?: string;
  userId?: number;
}