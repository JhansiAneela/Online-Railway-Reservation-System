import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ticketuser } from './ticketuser';

@Injectable({
  providedIn: 'root'
})
export class TicketService
{

  constructor(private _http: HttpClient) { }

  public bookingrFromRemote(ticketuser :Ticketuser)
  {
    return this._http.post("http://localhost:9005/bookTicket",ticketuser)
    
  }

}
