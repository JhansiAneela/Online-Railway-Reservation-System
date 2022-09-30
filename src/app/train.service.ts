import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  filter: any;
  trains: any;


  constructor(private http : HttpClient) { }

  postTrain(data : any)
  {
    return this.http.post<any>("http://localhost:9002/addTrain", data)
    .pipe(map((res:any)=>{
      return res;
    })) 
  }

  getTrain()
  {
    return this.http.get<any>("http://localhost:9002/Trains")
    .pipe(map((res:any) =>{
      return res;
    })) 
  }
  
  updateTrain(data : any,id: number)
  {
    return this.http.put<any>("http://localhost:9002/updateTrain",data)
    .pipe(map((res:any) =>{
      return res;
    })) 
  }

  deleteTrain(id : number)
  {
    console.log("deleted");
    return this.http.delete<any>("http://localhost:9002/delete/"+id)
    
    .pipe(map((res:any) =>{
      return res;
    })) 
  }
}