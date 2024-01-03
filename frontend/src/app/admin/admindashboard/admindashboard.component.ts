import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Movies } from '../movies';
import { Editmovies } from 'src/app/editmovies';
import { map } from 'rxjs';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  movie:Editmovies[]

  constructor(
    public route: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    // this.auth.movies().subscribe((response: any) => {
    //   console.log("all movies", response);
    //   this.movie = response;
    // })

    this.auth.movies().pipe(
      map((x:Editmovies[], i) => x.map ((movie:Editmovies) => this.auth.createImages(movie)))
    ) .subscribe((response: Editmovies[]) => {
      console.log("all movies", response);
      this.movie = response;
    })

  }

  logout() { }

  addmovies() {
    this.route.navigate(['/addmovies']);
  }

  editmovie(movieid:number){
    this.route.navigate(['/editmovie', movieid])
  }
}
