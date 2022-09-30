import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CancelTicketService } from '../cancel-ticket.service';
import { TrainTicket } from '../train-ticket';


@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {

  formValue !: FormGroup;
  trainObj : TrainTicket = new TrainTicket();
  trainData !: any;
  name !: string;

  constructor(private formbuilder: FormBuilder, private train : CancelTicketService, private _router : Router) { }
  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
   
      name : [''],  
      sourceStation : [''],
      destinationStation : [''],
      fare : ['']
      
    })

   
   this.getTrainByname();
  }
  

  getTrainByname()
  {
    this.train.getTrain()
    .subscribe(res=>{
      this.trainData = res;
    })
  }

  deleteTicket(row : any)
  {
    this.train.deleteTrain(row.id)
    .subscribe(res=>{
      alert("Train Deleted");
      this.getTrainByname();
      this.ngOnInit;
      
    });
  }

  Search()
  {
    if(this.name != "")
    {
      this.trainData = this.trainData.filter((res : any)=>
      {
  
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  
  
      });
  
    }
    else if (this.name == "")
    {
      this.ngOnInit();
    }
    
  }

  Back()
  {
    this._router.navigate(['/dashboard']) 
  }

  Logout()
  {
    this._router.navigate(['/home']) 
  }

}


