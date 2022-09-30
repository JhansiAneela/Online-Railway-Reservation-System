import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchTrainService {

  constructor(private http : HttpClient) { }

  postTrain(data : any)
  {
    return this.http.post<any>("http://localhost:9002/addTrain", data)
    .pipe(map((res:any)=>{
      return res;
    })) 
  }

  getTrain(data : any)
  {
    return this.http.get<any>("http://localhost:9002/searchTrains")
    .pipe(map((res:any) =>{
      return res;
    })) 
  }













}
