import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileService } from './profile.service';
import { AuthguardGuard } from '../user/authguard/auth.guard';
const routes:Routes=[{
  path:'profile',
  component:ProfileComponent,canActivate:[AuthguardGuard ]
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent],
  providers:[ProfileService]
})
export class ProfileModule { }
