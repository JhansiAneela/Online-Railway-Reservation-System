import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Registeruser } from '../registeruser';
import { User } from '../user';
import { userService } from '../user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registeruser=new Registeruser();
 



  constructor(private _service : userService, private _router : Router) { }

  ngOnInit(): void {
  }

  register_user()
  {
    this._service.register_userFromRemote(this.registeruser).subscribe(
      (data : any) =>{

          console.log("response received");
          //alert("Registration Successfull");
          Swal.fire('Registration Successful', 'user is successfully registered');
          this._router.navigate(['/login'])    
      },

      (error : any) =>
      {
        console.log("exception occured");
        alert("Something went wrong");
       
      });
  };

  

}

