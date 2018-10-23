import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Booking} from './booking';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService {

  constructor(private http: Http) { }

  //retrieving BookingService

  getBookings(){
    return this.http.get('http://localhost:3000/api/bookings')
    .map(res => res.json());
  }
  //add booking methods
  addBooking(newBooking)
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/booking', newBooking,{headers:headers})
    .map(res => res.json());
  }
  //delete booking details
  deleteBooking(id){
   return this.http.delete('http://localhost:3000/api/booking'+id)
   .map(res => res.json());
  }
}
