import { Injectable } from '@angular/core';
import { Feedback } from './feedback.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
fData:Feedback=new Feedback();
readonly fApiUrl='https://localhost:44306/api/Feedbacks'
fList:Feedback[];
  constructor(private Http:HttpClient) { }
  getFeedbackList()
  {
    this.Http.get(this.fApiUrl).toPromise().then(res=>this.fList=res as Feedback[]);
  }
  createFeedback()
  {
    return this.Http.post(this.fApiUrl,this.fData);
  }
}
