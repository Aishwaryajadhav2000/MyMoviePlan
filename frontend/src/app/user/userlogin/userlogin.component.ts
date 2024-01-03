import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { Users } from '../class/users';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  login: FormGroup;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      role: new FormControl(''),
      emailid: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit() {
    console.log("submit");

    if (this.login.value.role =='admin') {

      if (this.login.value.emailid == "aishwarya1608@gmail.com" && this.login.value.password == "aish123") {
        console.log("admin login success");
        this.router.navigate(['/dashboard']);
      } else {
        console.log("admin login credentials are wrong");
      }

      console.log("admin login");
    } else {
      console.log("else");
      this.auth.login(this.login.value.emailid).subscribe(data => {
        console.log("user login");
        console.log("data", data);
        if (data['useremailid'] == this.login.value.emailid && data['password'] == this.login.value.password) {
          console.log("user match");
          localStorage.setItem("useremail", data['useremailid'])
          this.router.navigate(['/home']);
  
        } else {
          console.log("incorrect");
        }
      })
    }

    
  }

}
