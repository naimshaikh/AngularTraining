import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/nav.service';
import { GlobalEventsManagerService } from '../global-events-manager.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  role:boolean;
  constructor() {this.role = false; }
  // hide(){this.role = false}
  // show(){this.role = true}
  ngOnInit() {
  //   let role = localStorage.getItem("authority")
  //   if(role === 'ROLE_ADMIN'){
  //     this.hide();
  //   }
  // }
  }
}