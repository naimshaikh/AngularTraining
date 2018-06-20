import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router) { }


  registerform = new FormGroup({

    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,12}')
    ])),
    panno: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')
    ])),

  });

  ngOnInit() {
  }
  register() {
    this.route.navigate(['/login']);
  }
}
