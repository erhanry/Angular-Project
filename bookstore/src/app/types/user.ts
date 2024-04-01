import { Book } from './books';

export interface UserForAuth {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Profile {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdBooks: Book[];
  boughtBooks: Book[];
  createdAt: string;
  updatedAt: string;
}
