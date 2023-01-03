import { Status } from './create.email.dto';

export interface UpdateEmail {
  id: number;
  title?: string;
  description?: string;
  status?: Status;
  html?: string;
  css?: string;
  userId?: number;
}