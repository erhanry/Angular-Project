import { Book } from './books';

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
  createdBooks: Book[];
  createdAt: string;
  updatedAt: string;
}
