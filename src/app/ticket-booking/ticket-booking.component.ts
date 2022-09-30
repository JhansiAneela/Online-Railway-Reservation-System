import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Ticketuser } from '../ticketuser';
import { TicketService } from '../ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {

  ticketuser=new Ticketuser();

  constructor(private _service : TicketService, private _router : Router) { }

  ngOnInit(): void {
  }

  booking()
  {
    this._service.bookingrFromRemote(this.ticketuser).subscribe(
      (data) =>{

          console.log("response received");
          //alert("Booking Successfull");
          Swal.fire('Booking Successful', 'user is successfully reserved a ticket');
             
      },

      (error : any) =>
      {
        console.log("exception occured");
        alert("Something went wrong");
       
      });
  };

  bookanotherticket()
  {
    this._router.navigate(['/dashboard'])
  }
  back()
  {
    this._router.navigate(['/dashboard'])
  }

  logout()
  {
    this._router.navigate(['/login']) 
  }

  }


