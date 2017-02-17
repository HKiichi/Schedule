import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {routing} from "./app.routing";
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header.component";
import {ScheduleService} from "./schedule/schedule.service";
import {SignUpComponent} from "./signup/signup.component";
import {AvailabilityComponent} from "./availability/availability.component";
import {DropdownDirective} from "./dropdown.directive";
import {ShiftComponent} from "./shift/shift.component";
import {LoginService} from "./login/login.service";
import {SignupService} from "./signup/signup.service";
import {ShiftService} from "./shift/shift.service";
import {LoggedInGuard} from "./login/login.logged-in-guard";
import {ProfileService} from "./login/login.profile-service";

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
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
