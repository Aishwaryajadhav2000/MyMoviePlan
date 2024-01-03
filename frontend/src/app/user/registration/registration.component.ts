import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { Users } from '../class/users';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  register: FormGroup;
  user: Users = new Users();

constructor(
  public router: Router,
  private fb: FormBuilder,
  public auth: AuthService
){}

ngOnInit(): void {
  
  this.register = this.fb.group({
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    password: new FormControl('', [Validators.required]),
    emailid:new FormControl(''),
  })
}

submit(){
  console.log("submit");
  console.log(this.user);
  this.auth.registration(this.user).subscribe(data =>{
    console.log("registration response", data);

  })
}


}
