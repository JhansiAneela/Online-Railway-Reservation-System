import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrainDashboardComponent } from './train-dashboard/train-dashboard.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { HomeComponent } from './home/home.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TrainDashboardComponent,
    TicketBookingComponent,
    HomeComponent,
    TicketlistComponent,
    CancelTicketComponent,
    

  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }