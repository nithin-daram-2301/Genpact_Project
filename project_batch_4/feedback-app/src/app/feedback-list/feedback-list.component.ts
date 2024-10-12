import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.css'
})
export class FeedbackListComponent implements OnInit{
  constructor(public objs:FeedbackService)
  {

  }
  ngOnInit(): void {
    this.objs.getFeedbackList();
  }

}
