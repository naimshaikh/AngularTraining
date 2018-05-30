import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NavService } from '../core/nav.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Add } from './help.model';
import { HelpService } from './help.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  addUserForm: FormGroup;
  user: Add;
 // private toasterService: ToasterService;
  constructor(private nav: NavService, private formBuilder: FormBuilder, private helpService: HelpService, private router: Router,public toastr:ToastsManager , vcr: ViewContainerRef  ) 
  {
    this.addUserForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email: ['',[Validators.required]],
      contact_no: ['',[Validators.required]],
      message:['',[Validators.required]],
       });
  
    this.user = new Add();
     this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {
    // this.nav.show();
   
  }
 
  onSave(){
    console.log(this.addUserForm.value)
    // if(this.addUserForm.value.name==null || this.addUserForm.value.email==null || this.addUserForm.value.contact_no==null || this.addUserForm.value.message==null ){
    if(this.addUserForm.value.any==null){  
    this.toastr.error('Please Fill out the Blank Fields !', 'Error!');
     }
     else{
      this.toastr.success('Feedback Sent Successfully!', 'Success!');
     }
    const formObj = this.addUserForm.value;
    this.helpService.addUser(formObj).subscribe(
      (user) => {
        this.user = <any>user;
      }
    );
    this.addUserForm.reset();
  }
}


