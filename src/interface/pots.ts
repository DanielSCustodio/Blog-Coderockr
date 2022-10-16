export interface Post {
  id: string;
  author: string;
  title: string;
  article: string;
  image: string;
  date: string;
}

export interface PostProps {
  posts: Post[];
}
