import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CancelTicketService {

  constructor(private http : HttpClient) { }

  deleteTrain(id : number)
  {
    console.log("deleted");
    return this.http.delete<any>("http://localhost:9005/delete/"+id)
    
    .pipe(map((res:any) =>{
      return res;
    })) 
  }

  getTrain()
  {
    return this.http.get<any>("http://localhost:9005/allTickets")
    .pipe(map((res:any) =>{
      return res;
    })) 
  }

  getTrainByname(data : any,name:String)
  {
    return this.http.put<any>("http://localhost:9005/TicketByname/",+name,data)
    .pipe(map((res:any) =>{
      return res;
    })) 
  }
}
