export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
  passwordHash: string;
}

export interface Post {
  id: number;
  governmentId: number;
  authorId: number;
  content: string;
  timestamp: string;
}

export interface Government {
  id: number;
  name: string;
  slogan: string;
  color: string;
  userIDs: number[];
  programUrl: string;
  posts: Post[];
}