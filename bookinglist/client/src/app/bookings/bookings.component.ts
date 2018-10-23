import { Component, OnInit } from '@angular/core';
import {BookingService} from '../booking.service';
import {Booking} from '../booking';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  providers:  [BookingService]
})
export class BookingsComponent implements OnInit {
  bookings: Booking[];
  booking: Booking;
  first_name:string;
  last_name:string;
  contactno:string;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingService.getBookings()
        .subscribe( bookings =>
          this.bookings = bookings
         );
          console.log(this.bookings);
  }

}
