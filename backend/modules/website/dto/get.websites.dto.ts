export interface GetWebsitesDto {
  userId: number;
}

export interface GetWebsiteDto {
  id: number;
  userId?: number;
}

export interface DeleteWebsiteDto {
  id: number;
}