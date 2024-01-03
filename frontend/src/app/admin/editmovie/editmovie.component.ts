import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FileHandle } from '../file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {

  movies: Movies = {
    moviename: '',
    moviedescription: '',
    category: '',
    ticketprice: 0,
    duration: 0,
    movieImages: []
  }

  id: number;

  constructor(
    public route: Router,
    private fb: FormBuilder,
    public auth: AuthService,
    private sanitizer: DomSanitizer,
    public router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['movieid'];
    console.log("id is", this.id);

    this.auth.movie(this.id).subscribe((response: any) => {
      console.log("response", response);
      this.movies = response
    })

  }

  submit() {
this.auth.updatemovie(this.id, this.movies).subscribe((response:any) =>{
  console.log("movie update sucessfull", response);
})
  }


  onFileSelect(event) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {

        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.movies.movieImages.push(fileHandle);
      console.log("last")
    }
  }
}
