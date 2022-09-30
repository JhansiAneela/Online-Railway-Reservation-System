import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Admin } from '../admin';
import { Loginuser } from '../loginuser';
import { User } from '../user';
import { userService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  loginuser = new Loginuser();
  message = ''

  constructor(private _service :userService, private _router : Router) { }

  ngOnInit(): void {
  }

  login_user()
  {
    this._service.login_userFromRemote(this.loginuser).subscribe(
      (data : any)=> {

        console.log("response received");
        //alert("Login Success");
        Swal.fire('Login Success'); 
        this._router.navigate(['/dashboard']) 
         
       
      },
      (error : any)=>
      { 
        console.log("exception occured");
        Swal.fire('Oops', 'Something went wrong'); 
        this.message = "Invalid credentials !! please provide correct details."
      });
  };

  

  gotoregistration()
  {
    this._router.navigate(['/registration'])

  }
  
  }

  




