import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
bData:Booking=new Booking();
readonly BApiUrl='http://localhost:5000/api/Bookings'
bList:Booking[];
  constructor(public http:HttpClient) { }
  getBookingList()
  {
    this.http.get(this.BApiUrl).toPromise().then(res=>this.bList=res as Booking[]);
  }
  createBooking()
  {
    return this.http.post(this.BApiUrl,this.bData);
  }
  cancelBooking(id)

 {

  return this.http.delete(this.BApiUrl+'/'+id);

 }
}
