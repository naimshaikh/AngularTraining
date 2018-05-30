import { Component, OnInit } from '@angular/core';
import { NavService } from '../../core/nav.service';
import { TableService } from '../tableservice/table.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-tablesreport',
  templateUrl: './tablesreport.component.html',
  styleUrls: ['./tablesreport.component.css']
})
export class TablesreportComponent implements OnInit {
public users:any;
public UserData:any;

  constructor(private nav:NavService,private tableService:TableService,public toastr:ToastsManager ) { }

  ngOnInit() {
    // this.nav.show();
    this.tableService.getReport().then(
      (response) => {
        this.users = response;
        this.UserData = JSON.parse(JSON.stringify(this.users));
        console.log(JSON.stringify(this.users));
      },
      (failure) => {
        console.log(failure.status);
      }
    );
  }
  
  search(){
    let   sdate= ((document.getElementById("startDate") as HTMLInputElement).value);
    let   edate= ((document.getElementById("endDate") as HTMLInputElement).value);
    //var sdate=document.getElementById("startDate");
    //var edate=document.getElementById("endDate");
    let data =this.UserData;
    let data1 = [{ version: "3.1.1", released_on: "2016-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
    { version: "3.1.1", released_on: "2011-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
    { version: "3.1.1", released_on: "2009-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
    { version: "3.1.1", released_on: "2006-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
    { version: "3.1.1", released_on: "2013-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
    { version: "3.1.1", released_on: "2017-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
    { version: "3.1.1", released_on: "2015-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
   ]
   if(sdate!="" && edate!=""){
   if(Date.parse(sdate) > Date.parse(edate)){
  // alert("Invalid Date Range");      
       this.toastr.error('Invalid Date!', 'Error!'); 
   }else{  
    let sd = new Date(sdate).getTime();
    let ed = new Date(edate).getTime();
    let result = data.filter(d => {
    let time = new Date(d.executiondate).getTime();
    return (sd <= time && time <= ed);
                        
    });
    this.users=result;
    console.log(result);
   }
   
   }
   else{
   this.users=this.UserData
  }
 }
}
