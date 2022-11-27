// Answer interface determines the structure of an answer type
export interface iAnswer {
  answer: string,
  is_correct: boolean;
}

interface AnswerArray extends Array<iAnswer> { }

// Question interface determines the structure of a question type
export interface iQuestion {
  question: string,
  category: string,
  answers: AnswerArray
}

export interface QuestionArray extends Array<iQuestion> { }
