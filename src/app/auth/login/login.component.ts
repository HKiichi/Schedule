/**
 * Created by iris on 23-11-16.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";


import 'rxjs/add/operator/map';
import {ProfileService} from "./login.profile-service";


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'

})
export class LoginComponent implements OnInit {
  loggedIn: boolean;
  username: string;
  password: string;

  constructor(private router: Router,
  private loginService: LoginService, private profile : ProfileService
  ) {}

  onSubmit(username, password) {
    this.loginService.login(username, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['/schedule']);
      }
    });
  }

  getProfile() {
    this.profile.getProfile();
  }
  //  login() {
  //    return this.http.get('http://localhost:8080/signup.json')
  //      .map((response: Response)) => response.json())
 //   .subscribe()
 //     if (localStorage.getItem('AdminPortalHasLoggedIn') == '' || localStorage.getItem('AdminPortalHasLoggedIn') == null ||localStorage.getItem != response.json) {
 //       this.loggedIn = false;
 //     } else {
 //       this.loggedIn = true;
 //       this.router.navigate(['/schedule'])
 //     }
   // }


  onNavigate(){
    this.router.navigate(['/signup'])

     }


 // onSubmit() {
 //   this.loginService.sendCredential(this.username, this.password).subscribe(
 //     res => {
  //      this.loggedIn=true;
  //      localStorage.setItem('AdminPortalHasLoggedIn', 'true');
  //      location.reload();
  //    },
 //     err => console.log(err)
 //   );
 // }


  ngOnInit(){
  }
}

