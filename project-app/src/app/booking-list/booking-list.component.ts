import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit{
  constructor(public objs:BookingService){}
  ngOnInit(): void {
    this.objs.getBookingList();
  }
  fillData(selectedB) {

    this.objs.bData = Object.assign({}, selectedB);
  
   }
  
   onCancel(bookingId) {
  
    if (confirm("Are you sure you want to cancel this booking?")) {
  
     this.objs.cancelBooking(bookingId).subscribe(
  
      res => {
  
       this.objs.getBookingList();
  
       alert("Booking Canceled");
  
      },
  
      err => { alert("Error: " + err); }
  
     );
  
    }
  
   }

}
