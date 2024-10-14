import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent implements OnInit{
  constructor(public objs:BookingService){}
  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    {
      form.form.reset();
    }
    else{
      this.objs.bData={Id:0,Name:'',Email:'',Mobile:'',TravelDate:new Date(),NumberOfGuests:0,CardNumber:'',Cvv:0}
    }
  }
  insertRecord(form:NgForm)
  {
    this.objs.createBooking().subscribe(res=>{
      this.resetForm(form);
      alert('New Booking is created');
      this.objs.getBookingList();
    },
    err=>{alert('Error!!'+err);}
  );
  }

}
