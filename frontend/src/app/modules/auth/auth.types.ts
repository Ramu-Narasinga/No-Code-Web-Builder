export type SignupPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export type LoginPayload = {
  email: string;
  password: string;
}

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
}
