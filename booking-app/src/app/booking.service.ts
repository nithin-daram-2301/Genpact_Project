import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bData:Booking=new Booking();
  readonly bApiUrl='http://localhost:5000/api/Bookings';
  bList:Booking[];
  constructor(private http:HttpClient) { }
  getBookingList()
  {
    this.http.get(this.bApiUrl).toPromise().then(res=>this.bList=res as Booking[]);
  }
  createBooking()
  {
    return this.http.post(this.bApiUrl,this.bData);
  }
}
