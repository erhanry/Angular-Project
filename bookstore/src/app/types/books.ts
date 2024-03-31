import { Category } from './category';
import { User } from './user';

export interface Book {
  _id: string;
  title: string;
  author: string;
  publisher: string;
  language: string;
  year: number;
  category: Category;
  price: number;
  imgUrl: string;
  sale: boolean;
  news: boolean;
  description: string;
  owner: User;
  createdAt: string;
  updatedAt: string;
}
