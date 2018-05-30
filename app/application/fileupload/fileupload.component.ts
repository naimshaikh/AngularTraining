import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Http, Headers,Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ToastsManager } from 'ng2-toastr';
import { NavService } from '../../core/nav.service';
import { FileuploadService } from './fileupload.service';
//generate pdf csv exls import{}
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { json2xls } from 'json2xls';
import 'jspdf-autotable';
import * as autoTable from 'jspdf-autotable';
import { $ } from 'protractor';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { FormGroup } from '@angular/forms';
let jsPDF = require('jspdf');

//declare var jsPDF: any; // Important 
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-file-upload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  buttonDisabled: boolean;
  public users:any;
  public UserData:any;
  //uploadffile
  title = 'Upload Multiple Files in Angular 4';
  constructor(private http:Http,
    private httpService: HttpClient,
    private nav:NavService,
    private fileuploadService:FileuploadService,
    public toaster: ToastsManager, vcr: ViewContainerRef
    ) { this.toaster.setRootViewContainerRef(vcr), this.buttonDisabled = false;}
  myFiles:string [] = [];
  sMsg:string = '';

  ngOnInit() {
    this.nav.show();
    //after uploading file file will get
    this.fileuploadService.getReport().then(
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
    //generate xlsx file 
    public exportAsExcelFile(json: any[], excelFileName: string): void {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
      this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    private saveAsExcelFile(buffer: any, fileName: string): void {
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
    //get datewise data when click on search event data will be show between date range
    search(){
      var   sdate= ((document.getElementById("startDate") as HTMLInputElement).value);
      var   edate= ((document.getElementById("endDate") as HTMLInputElement).value);
      //var sdate=document.getElementById("startDate");
      //var edate=document.getElementById("endDate");
      var data =this.UserData;
      var data1 = [{ version: "3.1.1", released_on: "2016-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
      { version: "3.1.1", released_on: "2011-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
      { version: "3.1.1", released_on: "2009-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
      { version: "3.1.1", released_on: "2006-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
      { version: "3.1.1", released_on: "2013-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
      { version: "3.1.1", released_on: "2017-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
      { version: "3.1.1", released_on: "2015-08-21T00:00:00.000Z", high_vulns: 15, medium_vulns: 10, low_vulns: 5 },
     ]
     if(sdate!="" && edate!=""){
      if(Date.parse(sdate) > Date.parse(edate)){
        alert("Invalid Date Range");      
     }else{  
      var sd = new Date(sdate).getTime();
      var ed = new Date(edate).getTime();
      var result = data.filter(d => {var time = new Date(d.executiondate).getTime();
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
  generateReport(type){
      var data= this.users; 
      if(type=='csv'){
      new Angular2Csv(data, 'My Report');
      }else if(type=="excel"){
        this.exportAsExcelFile(data,'report')
      }
      else if(type=="pdf"){     
      var columns = [
        {title: "test case id", dataKey: "testcaseid"},
        {title: "test descripation", dataKey: "testdescripation"}, 
        {title: "test step", dataKey: "teststep"},
        // {title: "months day", dataKey: "monthsday"},
        // {title: "report", dataKey: "report"}, 
        // {title: "report type", dataKey: "reporttype"},
        // {title: "report format", dataKey: "reportformat"},
        // {title: "toast message", dataKey: "toastmessage"}, 
        {title: "data to run", dataKey: "datatorun"},
        {title: "pass fail skip", dataKey: "passfailskip"},
        {title: "execution date", dataKey: "executiondate"}     
    ];
    var rows=this.UserData ;
      //let doc = new jsPDF();
      var doc = new jsPDF('p', 'pt');
      doc.autoTable(columns,rows)
      doc.text("Hello", 20, 20);
      doc.save('report.pdf');
      }
    }
   //validation to check file format
  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'xls') {
        return true;
    }else if(ext.toLowerCase() == 'csv'){ 
      return true;
    }else if(ext.toLowerCase() == 'xlsx'){ 
      return true;
    }
    else {
        return false;
        }
}
getFileDetails (event:any) {
  console.log (event.target.files);
  let files = event.target.files;
  //check file is valid
    let fData: FormData = new FormData;
    for (let i = 0; i < files.length; i++) {
      this.myFiles.push(event.target.files[i]);
    }
    let _data = {
        filename: 'Sample File',
        id: '0001'
    }
    if (!this.validateFile(files[0].name)) {
      this.toaster.error('File Formate is Not Support!', 'Error!');
     this.buttonDisabled = true;
      return false;
     }else{
      this.buttonDisabled = false
        return true;
     }
 
    // event.srcElement.value = null;
   // console.log (event.target.files);
    //for (var i = 0; i < event.target.files.length; i++) { 
                        
     //this.myFiles.push(event.target.files[i]);
    //}
}
uploadFiles () {
  const frmData = new FormData();
  for (let i = 0; i < this.myFiles.length; i++) { 
  // frmData.append("fileUpload", this.myFiles[i]);
  frmData.append("name", "Name");
  frmData.append("file",  this.myFiles[i]);  
  }
  this.httpService.post('http://192.168.0.78:8080/selenium/uploadfile', frmData).subscribe(
    data => {
    // SHOW A MESSAGE RECEIVED FROM THE WEB API.
    this.sMsg = data as string;
    console.log (this.sMsg);
    if(!this.sMsg){
    this.toaster.error('Please Pick up the Xls File!', 'Error!');
    }else{
      this.toaster.success('File Uploaded Succesfully!', 'Success!');
    }
    },
       
      (err: HttpErrorResponse) => {
       // SHOW ERRORS IF ANY.
       this.toaster.error('Please Select the Xls File!', 'Error!');
      }
    );
   }
}
interface User{
  id:number;
  testcaseid:string;
  testdescripation:string;
  teststep:string;
  monthsday:number;
  report:string;
  searchby:string;
  reporttype:string;
  reportformat:string;
  toastmessages:string;
  filename:string;
  passfailskip:string;
  executiondate:string;
  }
