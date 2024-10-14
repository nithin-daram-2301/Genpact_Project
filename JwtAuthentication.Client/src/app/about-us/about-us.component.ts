import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  constructor(public objs:FeedbackService)
  {

  }
  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    {
      form.form.reset();
    }
    else
    {
      this.objs.fData={Id:0,Uname:'',Uemail:'',Rating:0,Comment:''}
    }
  }
  insertRecord(form:NgForm)
  {
    this.objs.createFeedback().subscribe(res=>{
      this.objs.createFeedback();
      alert('your feedback is submitted');
      this.objs.getFeedbackList();
    },
    err=>{alert('Error!!!'+err);}
    );
  }
}
