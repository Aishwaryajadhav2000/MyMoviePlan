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
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  movies: Movies = {
    moviename: '',
    moviedescription: '',
    category: '',
    ticketprice: 0,
    duration: 0,
    movieImages: []
  }

  bookmov: Bookmovi = {
    userid: 0,
    useremailid: localStorage.getItem('useremail'),
    moviename: localStorage.getItem('moviename')
  }
  demo: any;
  movie: Editmovies[];
  id: number;
  constructor(
    public route: Router,
    private fb: FormBuilder,
    public auth: AuthService,
    private sanitizer: DomSanitizer,
    public router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("useremailid", this.bookmov.useremailid);
    console.log("moviename", this.bookmov.moviename);

    this.id = this.router.snapshot.params['movieid'];
    console.log("id is", this.id);

    this.getmovie();

    this.auth.movies().pipe(
      map((x: Editmovies[], i) => x.map((movie: Editmovies) => this.auth.createImages(movie)))
    ).subscribe((response: Editmovies[]) => {
      console.log("all movies", response);
      this.movie = response;
      console.log("movie", this.movie);
    })



  }

  getmovie() {
    this.auth.movie(this.id).subscribe((response: any) => {
      console.log("response", response);
      localStorage.setItem("moviename", response['moviename']);
      this.movies = response;
    });
  }
  explore() {
    this.route.navigate(['/home']);
  }

  bookmovie() {
    console.log("bookmovie");

    let data = this.bookmov;
    this.auth.bookmovie(data).subscribe((response: any) => {
      console.log("response book movies", response);
    })

    this.route.navigate(['/cart']);
  }
}
