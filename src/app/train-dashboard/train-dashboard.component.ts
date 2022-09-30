import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Train } from '../train-dashboard.model';
import { TrainService } from '../train.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-train-dashboard',
  templateUrl: './train-dashboard.component.html',
  styleUrls: ['./train-dashboard.component.css']
})
export class TrainDashboardComponent implements OnInit {

  formValue !: FormGroup;
  trainObj : Train = new Train();
  trainData !: any;
  destinationStation !: String;
  showAdd! : boolean;
  showUpdate !: boolean;
  Train: any;
 

  constructor(private formbuilder: FormBuilder, private train : TrainService, private _router : Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id : [''],
      name : [''],
      trainId : [''],
      sourceStation : [''],
      destinationStation : [''],
      type : [''],
      date : [''],
      seats : [''],
      arrives : [''],
      departs : [''],
      fare : [''],
      distance : ['']
    })

    this.getAllTrain();
  }

  clickAddTrain()
  {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postTrainDetails()
  {
    this.trainObj.id = this.formValue.value.id;
    this.trainObj.name = this.formValue.value.name;
    this.trainObj.trainId = this.formValue.value.trainId;
    this.trainObj.sourceStation = this.formValue.value.sourceStation;
    this.trainObj.destinationStation = this.formValue.value.destinationStation;
    this.trainObj.type = this.formValue.value.type;
    this.trainObj.date = this.formValue.value.date;
    this.trainObj.seats = this.formValue.value.seats;
    this.trainObj.arrives = this.formValue.value.arrives;
    this.trainObj.departs = this.formValue.value.departs;
    this.trainObj.fare = this.formValue.value.fare;
    this.trainObj.distance = this.formValue.value.distance;

    this.train.postTrain(this.trainObj)
    .subscribe(res=>{
      console.log(res);
      //alert("Train added Successfully")
      Swal.fire('Train added Successfully');
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllTrain();
      
    },

    error=>{
      alert("Something went wrong");
    })
  }

  getAllTrain()
  {
    this.train.getTrain()
    .subscribe(res=>{
      this.trainData = res;
    })
  }

  getTrainByname(row : any)
  {
    this.train.deleteTrain(row.id)
    .subscribe(res=>{
      this.getAllTrain();
      this.ngOnInit;
    })
  }


  deleteTrain(row : any)
  {
    this.train.deleteTrain(row.id)
    .subscribe(res=>{
      alert("Train Deleted");
      this.getAllTrain();
      this.ngOnInit;
    })
  }

  onEdit(row : any)
  {

    this.showAdd = false;
    this.showUpdate = true;
    this.trainObj.id = row.id;

    this.formValue.controls['id'].setValue(row.id)
    this.formValue.controls['name'].setValue(row.name)
    this.formValue.controls['trainId'].setValue(row.trainId)
    this.formValue.controls['sourceStation'].setValue(row.sourceStation)
    this.formValue.controls['destinationStation'].setValue(row.destinationStation)
    this.formValue.controls['type'].setValue(row.type)
    this.formValue.controls['date'].setValue(row.date)
    this.formValue.controls['seats'].setValue(row.seats)
    this.formValue.controls['arrives'].setValue(row.arrives)
    this.formValue.controls['departs'].setValue(row.departs)
    this.formValue.controls['fare'].setValue(row.fare)
    this.formValue.controls['distance'].setValue(row.distance)

  }

  updateTrainDetails()
  {
    this.trainObj.id = this.formValue.value.id;
    this.trainObj.name = this.formValue.value.name;
    this.trainObj.trainId = this.formValue.value.trainId;
    this.trainObj.sourceStation = this.formValue.value.sourceStation;
    this.trainObj.destinationStation = this.formValue.value.destinationStation;
    this.trainObj.type = this.formValue.value.type;
    this.trainObj.seats = this.formValue.value.seats;
    this.trainObj.arrives = this.formValue.value.arrives;
    this.trainObj.departs = this.formValue.value.departs;
    this.trainObj.fare = this.formValue.value.fare;
    this.trainObj.distance = this.formValue.value.distance;

    this.train.updateTrain(this.trainObj,this.trainObj.id)
    .subscribe(res=>{
      //alert("updated successfully");
      Swal.fire('Updated Successfully');
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllTrain();
    })
  }

  
  Search()
  {
    if(this.destinationStation != "")
    {
      this.trainData = this.trainData.filter((res : any)=>
      {
  
        return res.destinationStation.toLocaleLowerCase().match(this.destinationStation.toLocaleLowerCase());
  
  
      });
  
    }
    else if (this.destinationStation == "")
    {
      this.ngOnInit();
    }
    
  }

  Book()
  {
    this._router.navigate(['/ticket-booking'])

  }

  Cancel()
  {
    this._router.navigate(['/cancel']) 
  }

  Logout()
  {
    this._router.navigate(['/home']) 
  }

}