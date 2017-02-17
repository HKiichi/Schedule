import {Routes, RouterModule} from "@angular/router";
import {ScheduleComponent} from "./schedule/schedule.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./signup/signup.component";
import {AvailabilityComponent} from "./availability/availability.component";
import {ShiftComponent} from "./shift/shift.component";


/**
 * Created by iris on 23-11-16.
 */
const AppRoutes : Routes =[
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'availability', component: AvailabilityComponent},
  { path: "shifts", component: ShiftComponent}

  ];

export const routing = RouterModule.forRoot(AppRoutes);
