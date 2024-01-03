import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Movies } from '../admin/movies';
import { Editmovies } from '../editmovies';
import { FileHandle } from '../admin/file-handle.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseURL = "http://localhost:8080/simplilearn/movies";

  constructor(
    private httpclient:HttpClient,
    private sanitizer: DomSanitizer
  ) { }

registration(data){
  return this.httpclient.post(this.baseURL + "/register" , data)
}

login(emailid){
  return this.httpclient.get(this.baseURL + "/login" + "/" +emailid);
}

     //addproduct
addnewproduct(movies:FormData){
return this.httpclient.post<Movies>(this.baseURL + "/addmovies", movies)
}

//get all movies
movies(){
  return this.httpclient.get<Movies[]>(this.baseURL + "/getallmovies");
}

//get movie by id
movie(movieid){
  return this.httpclient.get(this.baseURL + "/update" + "/" + movieid)
}
 //update movie
 updatemovie(id:number,data){
  return this.httpclient.post(this.baseURL + "/updatemovie" + "/" + id, data);
 }

 //book movies
 bookmovie(data){
  return this.httpclient.post(this.baseURL + "/bookmovies" , data);
 }

 //get booked movies
 getbookedmovies(emailid){
  return this.httpclient.get(this.baseURL + "/getbookedmovies" + "/" + emailid)
 }

 public createImages(movie: Editmovies) {

  const productImages: any[] = movie.movieImages;

  const productImagesToFileHandle: FileHandle[] = [];

  for (let i = 0; i < productImages.length; i++) {
    const imageFileData = productImages[i];

    const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type)

    const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type })

    const finalFileHandle: FileHandle = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    };

    productImagesToFileHandle.push(finalFileHandle);

  }
  movie.movieImages = productImagesToFileHandle;
  return movie;
}

public dataURItoBlob(picBytes, imageType) {
  const byteString = window.atob(picBytes);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);

  }

  const blob = new Blob([int8Array], { type: imageType });
  return blob;
}











public createImagess(movies: Movies) {

  const productImages: any[] = movies.movieImages;

  const productImagesToFileHandle: FileHandle[] = [];

  for (let i = 0; i < productImages.length; i++) {
    const imageFileData = productImages[i];

    const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type)

    const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type })

    const finalFileHandle: FileHandle = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
    };

    productImagesToFileHandle.push(finalFileHandle);

  }
  movies.movieImages = productImagesToFileHandle;
  return movies;
}

public dataURItoBlobs(picBytes, imageType) {
  const byteString = window.atob(picBytes);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);

  }

  const blob = new Blob([int8Array], { type: imageType });
  return blob;
}





}
