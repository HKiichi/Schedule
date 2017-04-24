import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {routing} from "./app.routing";
import {LoginComponent} from "./auth/login/login.component";
import {HeaderComponent} from "./header.component";
import {ScheduleService} from "./schedule/schedule.service";
import {SignUpComponent} from "./auth/signup/signup.component";
import {AvailabilityComponent} from "./availability/availability.component";
import {DropdownDirective} from "./dropdown.directive";
import {ShiftComponent} from "./shift/shift.component";
import {LoginService} from "./auth/login/login.service";
import {SignupService} from "./auth/signup/signup.service";
import {ShiftService} from "./shift/shift.service";
import {LoggedInGuard} from "./auth/login/login.logged-in-guard";
import {ProfileService} from "./auth/login/login.profile-service";
import {AvailabilityService} from "./availability/availability.service";

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LoginComponent,
    HeaderComponent,
    SignUpComponent,
    AvailabilityComponent,
    DropdownDirective,
    ShiftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ScheduleService,
    LoginService,
    SignupService,
    ShiftService,
    LoggedInGuard,
    ProfileService,
    ScheduleService,
    AvailabilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
