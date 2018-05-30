import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../user/services/authentication.service';
import { Http } from '@angular/http';
import { LoginComponent } from '../../user/login/login.component';
import { GlobalEventsManagerService } from '../../global-events-manager.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
 
})
export class SidebarComponent implements OnInit {
 showNavBar: boolean = false;
 userType:string;
 uname:string;
 userInfo:string;
 role:boolean;
  constructor( private globalEventsManager: GlobalEventsManagerService,private http:Http,private router:Router,private authentication:AuthenticationService) 
  {this.role = false;
   this.userType='';
   this.uname='';
   this.userInfo='';
    }
  logout(){
    this.authentication.logout();
    this.globalEventsManager.showNavBar(false);
    this.router.navigate(['/login'])
  }
  hide(){this.role = false}
  show(){this.role = true}
  ngOnInit() {
    console.log(localStorage.getItem("authority"))
    console.log(localStorage.getItem("user"))
    //get user role to give authority
    let role = localStorage.getItem("authority")
    //get username for identifie
    let uname = localStorage.getItem("user")
   this.userInfo = uname
    if(role === 'ROLE_ADMIN'){
      this.userType = 'ADMIN';
      this.hide();
    }
    else{
      this.userType = 'USER'
       this.show();
    }
  }
}
