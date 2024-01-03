import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { Users } from '../class/users';
import { AuthService } from 'src/app/services/auth.service';
import { Editmovies } from 'src/app/editmovies';
import { map } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  movie:Editmovies[]
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.movies().pipe(
      map((x:Editmovies[], i) => x.map ((movie:Editmovies) => this.auth.createImages(movie)))
    ) .subscribe((response: Editmovies[]) => {
      console.log("all movies", response);
      this.movie = response;
    })
  }

  register(){
    this.router.navigate(['/register']);
  }

  login(){
    this.router.navigate(['/login']);
  }

}
