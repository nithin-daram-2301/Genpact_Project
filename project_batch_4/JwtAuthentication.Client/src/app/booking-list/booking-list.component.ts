import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit{
  constructor(public objs:BookingService)
  {

  }
  ngOnInit(): void {
    this.objs.getBookingList();
  }

}
