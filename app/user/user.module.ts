import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthguardGuard } from './authguard/auth.guard';

const routes:Routes=[
 
 ]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [LoginComponent],
  exports:[RouterModule],
  providers:[
    AuthenticationService,
    AuthguardGuard
  ]
})
export class UserModule { }
