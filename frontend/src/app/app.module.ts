import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { MoviedetailComponent } from './admin/moviedetail/moviedetail.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { CartComponent } from './user/cart/cart.component';
import { MoviedetailsComponent } from './user/moviedetails/moviedetails.component';
import { OrdersComponent } from './user/orders/orders.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { MainComponent } from './user/main/main.component';
import { EditmovieComponent } from './admin/editmovie/editmovie.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AddmovieComponent,
    MoviedetailComponent,
    RegistrationComponent,
    UserloginComponent,
    UserdashboardComponent,
    CartComponent,
    MoviedetailsComponent,
    OrdersComponent,
    MainComponent,
    EditmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
