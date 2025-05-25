export interface Participant {
  id: number;
  name: string;
  role: string;
  avatar: string;
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
  participants: Participant[];
  programUrl: string;
  posts: Post[];
}