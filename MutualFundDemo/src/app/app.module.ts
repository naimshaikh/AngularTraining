import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {InMemoryDataServiceService} from './in-memory-data-service.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from '@angular/router/src/config';
import { Component } from '@angular/core/src/metadata/directives';
import { Router } from '@angular/router/src/router';
import { ShowdataComponent } from './showdata/showdata.component';
import { RegserviceService } from './regservice.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

const AppRoutes : Routes=[
  { path:'', component:RegisterComponent},
  { path:'register', component:RegisterComponent},
  { path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ShowdataComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataServiceService, { dataEncapsulation: false }
    ),
  ],
  providers: [RegserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
