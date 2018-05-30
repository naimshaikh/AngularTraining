import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FileuploadService } from './fileupload/fileupload.service';
import { AuthguardGuard } from '../user/authguard/auth.guard';
import { AuthappGuard } from './authapp.guard/authapp.guard';
// import datepicker 
import { MyDatePickerModule } from 'mydatepicker';
const routes:Routes=[
{path:'application',component:ApplicationComponent,canActivate:[AuthappGuard ]},
{path:'fileupload',component:FileuploadComponent,canActivate:[AuthguardGuard]}
]
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes),
    MyDatePickerModule
  ],
  declarations: [ApplicationComponent,FileuploadComponent],
  providers:[FileuploadService,AuthappGuard]
})
export class ApplicationModule { }
