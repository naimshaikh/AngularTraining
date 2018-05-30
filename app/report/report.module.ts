import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TablesreportComponent } from './tablesreport/tablesreport.component';
import { ChartsreportComponent } from './chartsreport/chartsreport.component';
import { HttpModule } from '@angular/http';
import { TableService } from './tableservice/table.service';
import { AuthguardGuard } from '../user/authguard/auth.guard';
import { ChartsModule } from 'ng2-charts/ng2-charts';

const routes:Routes=[
  {path:'tablesreport',component:TablesreportComponent,canActivate:[AuthguardGuard ]},
  {path:'chartsreport',component:ChartsreportComponent,canActivate:[AuthguardGuard ]}
]
@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsreportComponent,TablesreportComponent],
  providers:[TableService]
})
export class ReportModule { }
