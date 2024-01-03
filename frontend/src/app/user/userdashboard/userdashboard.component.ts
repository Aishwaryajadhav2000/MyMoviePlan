import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { Users } from '../class/users';
import { AuthService } from 'src/app/services/auth.service';
import { Editmovies } from 'src/app/editmovies';
import { map } from 'rxjs';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  emailid: any;
  firstname:any;
  movie:Editmovies[]

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public auth: AuthService
  ) { }

  ngOnInit(): void {

    this.emailid = localStorage.getItem('useremail')
    this.getuser();

    this.auth.movies().pipe(
      map((x:Editmovies[], i) => x.map ((movie:Editmovies) => this.auth.createImages(movie)))
    ) .subscribe((response: Editmovies[]) => {
      console.log("all movies", response);
      this.movie = response;
    })
  }

  getuser() {
    this.auth.login(this.emailid).subscribe((response: any) => {
      console.log("response", response);
      this.firstname = response.firstname;
    })
  }

  bookmovie(movieid){
   
    this.router.navigate(['/orders', movieid]);

  }

  orders(){
    this.router.navigate(['/cart']); 
  }

}
