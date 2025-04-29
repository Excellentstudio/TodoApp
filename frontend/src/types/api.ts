export interface User {
  id: number;
  username: string;
  email: string;
}

export interface TodoItem {
  id: number;
  userId: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface UserRegisterDto {
  username: string;
  email: string;
  password: string;
}

export interface UserLoginDto {
  email: string;
  password: string;
}

export interface TodoItemDto {
  title: string;
  description: string;
}