import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FileHandle } from '../file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  movies: Movies = {
    moviename: '',
    moviedescription: '',
    category: '',
    ticketprice: 0,
    duration: 0,
    movieImages: []
  }
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public auth: AuthService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void { }

  submit(){
    const productFormData = this.prepareformdata(this.movies);
    this.auth.addnewproduct(productFormData).subscribe((response:Movies) =>{
      console.log("added", response);
      this.router.navigate(['/dashboard']);
    })
  }

  prepareformdata(movies: Movies) {
    const formData = new FormData();
    formData.append(
      'movies',
      new Blob([JSON.stringify(movies)], { type: 'application/json' })
    );
    for (var i = 0; i < movies.movieImages.length; i++) {
      formData.append(
        'imageFile',
        movies.movieImages[i].file,
        movies.movieImages[i].file.name
      )
    }
return formData;
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
