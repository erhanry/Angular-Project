export interface UserForAuth {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdBooks: string[];
  createdAt: string;
  updatedAt: string;
}
