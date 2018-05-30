import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpService } from './help.service';
import { AuthguardGuard } from '../user/authguard/auth.guard';
const routes:Routes = [
  {path:'help',component:HelpComponent,canActivate:[AuthguardGuard ]}
]
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HelpComponent],
  providers:[HelpService]
})
export class HelpModule { }
