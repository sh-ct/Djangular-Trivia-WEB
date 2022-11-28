// Answer interface determines the structure of an answer type
export interface IAnswer {
  answer: string,
  is_correct: boolean;
}

interface IAnswerArray extends Array<IAnswer> { }

// Question interface determines the structure of a question type
export interface IQuestion {
  question: string,
  category: string,
  answers: IAnswerArray
}

export interface IQuestionArray extends Array<IQuestion> { }
