import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Routes } from '@angular/router';
import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { AuthguardGuard } from '../user/authguard/auth.guard';
import { ChartsModule } from 'ng2-charts/ng2-charts';

const routes:Routes=[{
  path:'dashboard',
  canActivate:[AuthguardGuard ],
  component:DashboardComponent 
}]
@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent],
  exports:[RouterModule]
  
})
export class DashboardModule { }
