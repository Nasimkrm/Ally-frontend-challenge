interface Question {
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  summary: string;
  questions: Question[];
  comment: string;
}
