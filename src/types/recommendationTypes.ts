interface Question {
  question: string;
  answer: string;
}

interface User {
  name: string;
  avatar: string;
}

export interface Review {
  id: string;
  user: User;
  type: string;
  name: string;
  url: string | null;
  upvotes: number;
}
