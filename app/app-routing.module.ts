import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AuthguardGuard } from './user/authguard/auth.guard';

const routes: Routes = [
   
  { path:'login',  component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
 
  //  {path:'dashboard',
  //  loadChildren:'app/dashboard/dashboard.module#DashboardModule'},
  //  {path:'application',
  //  loadChildren:'app/application/application.module#ApplicationModule'},
  //  {path:'profile',
  //  loadChildren:'app/profile/profile.module#ProfileModule'},
  //  {path:'help',
  //  loadChildren:'app/help/help.module#HelpModule'},
   ];
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],

})
export class AppRoutingModule {}
