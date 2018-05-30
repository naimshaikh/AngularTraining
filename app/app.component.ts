import { Component } from '@angular/core';
import { GlobalEventsManagerService } from './global-events-manager.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './user/services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  redirectUrl: string;
  showNavBar: boolean = false;
  clearData:boolean = false;

  constructor(private router:Router,private globalEventsManager:GlobalEventsManagerService) { 
    // if(!!localStorage.getItem('user')){
      
    //  this.clearData = true;
    //   this.router.navigate(['/dashboard'])
    // }else{
    //   this.router.navigate(['/login'])
    //   this.clearData = false;
    // }
    //
      this.globalEventsManager.showNavBarEmitter.subscribe((mode)=>{
        if (!!localStorage.getItem('user')) {
          this.showNavBar = true;
        } else {
          this.showNavBar = mode;
        } 
      });  
      }
      ngOnInit() {
        
}
}
