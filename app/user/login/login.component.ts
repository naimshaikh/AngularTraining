//@Author
//Ashok
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavService } from '../../core/nav.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { GlobalEventsManagerService } from '../../global-events-manager.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  visible:boolean
  uname: any;
  showNavBar: boolean = false;
   public userRole: any;
 // loginForm is defined as an instance of FormGroup:
 loginForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private globalEventsManager: GlobalEventsManagerService,
    public toaster: ToastsManager, vcr: ViewContainerRef) {
      this.toaster.setRootViewContainerRef(vcr);
    }
  ngOnInit() {
    this.uname = '';
   
    if (!!localStorage.getItem('user')) {
      this.router.navigate(['/dashboard']);
    }
    // loginForm defined as a instance of Formgroup and write the code of validation:
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  // Function create for login user :
  login(user) {
    if (!this.loginForm.value.username) {
      this.toaster.error('Please Enter Email!', 'Invalid!');
      return;
    } else if (!this.loginForm.value.password) {
      this.toaster.error('Please Enter Password!', 'Invalid!');
      return;
    } else {
      console.log('valid calling');
      //call login success
      this.authenticationService.login(this.loginForm.value).then(
      (response) => {
        debugger
        if(response == null){
          this.toaster.error( 'Please Enter Valid Username', 'Error',);
        }else if(this.loginForm.value.username == response.password){
          this.toaster.error( 'Please Enter Valid Password', 'Error',);
        }
      //get username for show in sidebar
      let uname = response.username
      localStorage.setItem('user',uname);
      // check user role 
      if (response.authorities[0].authority == 'ROLE_ADMIN' ) {
          localStorage.setItem('authority','ROLE_ADMIN');
          }
          else {
            localStorage.setItem('authority', 'ROLE_USER');
          }
      //check after get user then shown nav&side-bar to next page    
        this.globalEventsManager.showNavBar(true);
        this.router.navigate(['/dashboard']);
        },
        (failure:HttpErrorResponse) => {
          console.log(failure.status);
          this.toaster.error( 'Please try again', 'Error',);
        }
       );
    
    }
  }
}