import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/nav.service';
import { ProfileService } from './profile.service';
import { View } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile:View[]
  profileData:any
  constructor(private nav:NavService,private profileService:ProfileService) { 
    this.profile=[];
  }

  ngOnInit() {
    // this.nav.show()
    
    this.profileService.getProfile().then(
      (response) => {
        this.profile = response[0];
        let profile = response[0];
        this.profileData = JSON.parse(JSON.stringify(this.profile));
        console.log(JSON.stringify(this.profile));
      });
     }
  }


