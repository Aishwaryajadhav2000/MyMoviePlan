import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { CartComponent } from './user/cart/cart.component';
import { OrdersComponent } from './user/orders/orders.component';
import { MoviedetailComponent } from './admin/moviedetail/moviedetail.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { MoviedetailsComponent } from './user/moviedetails/moviedetails.component';
import { MainComponent } from './user/main/main.component';
import { EditmovieComponent } from './admin/editmovie/editmovie.component';
const routes: Routes = [
  {path:"register" , component:RegistrationComponent},
  {path:"" , component:MainComponent},
  {path:"login" , component:UserloginComponent},
  {path:"home" , component:UserdashboardComponent},
  {path:"cart" , component:CartComponent},
  {path:"orders/:movieid" , component:OrdersComponent},
  {path:"detail" , component:MoviedetailComponent},
  {path:"dashboard" , component:AdmindashboardComponent},
  {path:"adminlogin" , component:AdminloginComponent},
  {path:"addmovies" , component:AddmovieComponent},
  {path:"details" , component:MoviedetailsComponent},
  {path:"editmovie/:movieid" , component:EditmovieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
