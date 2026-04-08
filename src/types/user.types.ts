// User types
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  createdAt: Date;
}

export interface AuthUser {
  id: string;
  email: string;
}
