import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/admin/movies';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FileHandle } from 'src/app/admin/file-handle.model';
import { Editmovies } from 'src/app/editmovies';
import { map } from 'rxjs';
import { Bookmovi } from '../class/bookmovi';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
emailid:any;
bookmov: Bookmovi = {
  userid: 0,
  useremailid: localStorage.getItem('useremail'),
  moviename: localStorage.getItem('moviename')
}
  constructor(
    public route: Router,
    private fb: FormBuilder,
    public auth: AuthService,
    private sanitizer: DomSanitizer,
    public router: ActivatedRoute
  ){}

  ngOnInit(): void {
localStorage

this.emailid = localStorage.getItem('useremail'),

    this.auth.getbookedmovies(this.emailid).subscribe((response:any)=>{
      console.log("response booked movies", response);
      this.bookmov = response;
    })
  }

}
