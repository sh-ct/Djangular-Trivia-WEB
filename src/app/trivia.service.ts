import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IQuestionArray} from "./trivia.interfaces";

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private http: HttpClient) { }

  getTrivia(): Observable<IQuestionArray> {
    return this.http.get('http://127.0.0.1:8000/api/v1/questions/') as Observable<IQuestionArray>
  }
}
