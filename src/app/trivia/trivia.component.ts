import { Component, OnInit } from '@angular/core';
import { TriviaService } from "../trivia.service";
import { IQuestion, IQuestionArray, IAnswer } from "../trivia.interfaces";
import { MatRadioChange } from "@angular/material/radio";

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  triviaData: IQuestionArray = [];
  question: IQuestion|null = null;
  answer: IAnswer|null = null;
  disableRadioButtons: boolean = false;
  disableNextButton: boolean = true;
  questionNumber: number = 0;
  correctAnswers: number = 0;

  constructor(private triviaService: TriviaService) { }

  ngOnInit(): void {
    this.getTrivia();
  }

  getTrivia() {
    this.triviaService.getTrivia().subscribe({
      next: (data) => {
        this.triviaData = data;
        this.getNextQuestion();
      },
      error: (error) => {
        console.error('GetTrivia has returned an error.', error.error);
      }
    })
  }

  getNextQuestion() {
    if (this.triviaData.length) {
      const index = Math.floor(Math.random() * this.triviaData.length);
      this.question = this.triviaData[index];
      this.triviaData.splice(index, 1);
    } else {
      this.question = null;
    }

    if (this.answer) {
      this.questionNumber++;
      if (this.answer.is_correct) {
        this.correctAnswers++;
      }
    }

    this.answer = null;
    this.disableRadioButtons = false;
    this.disableNextButton = true;
  }

  getCorrectAnswer() {
    if (this.question) {
    return this.question.answers.filter(answer => answer.is_correct)[0].answer;
    }
    return '';
  }

  answerSelected(event: MatRadioChange) {
    this.disableRadioButtons = true;
    this.disableNextButton = false;
  }


}
