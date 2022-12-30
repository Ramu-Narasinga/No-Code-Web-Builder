enum Status {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE'
}

export interface CreateEmailDto {
  title: string;
  description: string;
  status: Status;
  html: string;
  css: string;
  userId: number;
}

export interface UpdateEmailDto {
  id: number;
  title?: string;
  description?: string;
  status?: Status;
  html?: string;
  css?: string;
  userId?: number;
}