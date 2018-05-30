import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';
import { GlobalEventsManagerService } from '../../global-events-manager.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   constructor() {}
     ngOnInit() {
  }

}
