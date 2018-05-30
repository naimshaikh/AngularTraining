import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { NavService } from './core/nav.service';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GlobalEventsManagerService } from './global-events-manager.service';
import { AuthenticationService } from './user/services/authentication.service';
import { UserModule } from './user/user.module';
import { ReportModule } from './report/report.module';
import { HelpModule } from './help/help.module';
import { ApplicationModule } from './application/application.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { AuthguardGuard } from './user/authguard/auth.guard';
import { AuthappGuard } from './application/authapp.guard/authapp.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    ApplicationModule,
    DashboardModule,
    HelpModule,
    ProfileModule,
    ReportModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
      ],
  providers: [NavService,AuthenticationService,GlobalEventsManagerService,AuthguardGuard,AuthappGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
