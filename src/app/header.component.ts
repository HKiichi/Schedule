import {Component, OnInit} from "@angular/core";
import {ScheduleService} from "./schedule/schedule.service";
import {SignupService} from "./auth/signup/signup.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {LoginService} from "./auth/login/login.service";
/**
 * Created by iris on 24-11-16.
 */


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'

})

export class HeaderComponent implements OnInit{
  loggedIn : boolean;

  constructor(private scheduleService: ScheduleService,
  private signupService: SignupService, private http: Http,
              private router: Router, private loginService: LoginService)
             {}

  logout() {
    let url = "http://localhost:8080/logout";
    return this.http.get(url, {withCredentials: false});


  }
  goToMainPage() {
    this.router.navigate(['login'])
  }
  ngOnInit(){}

}
