import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Loginuser } from './loginuser';
import { Registeruser } from './registeruser';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class userService 
{

  constructor(private _http: HttpClient) { }

  public login_userFromRemote(loginuser :Loginuser)
  {
    return this._http.post("http://localhost:9001/user/login",loginuser)
    
  }

  public register_userFromRemote(registeruser :Registeruser)
  {
    return this._http.post<any>("http://localhost:9001/user/registeruser",registeruser)
  }

  /*errorHandler(error: HttpErrorResponse)
  {
    return Observable.throw(error.message || "Server Error");
  }*/

}