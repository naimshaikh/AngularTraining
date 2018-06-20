import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  loginform = new FormGroup({

    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,12}')
    ])),
  });
  ngOnInit() {
  }
  login(){
    let email=this.loginform.value.email;
    console.log(email);
    let password=this.loginform.value.password;
    if(email=="naim@gmail.com" && password=="Naim@123"){
    this.route.navigate(['/dashboard']); 
    } 
    else{
      console.log("Login Failed..!");
    }
  }

}
