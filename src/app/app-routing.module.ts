import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { TrainDashboardComponent } from './train-dashboard/train-dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:TrainDashboardComponent},
  {path:'ticket-booking',component:TicketBookingComponent},
  {path:'cancel',component:CancelTicketComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
