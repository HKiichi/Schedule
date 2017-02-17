import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";

import {SignUpComponent} from "./signup.component";


/**
 * Created by iris on 23-11-16.
 */

@Injectable()
export class SignupService {


 constructor(private http: Http/*, private person: Person*/
            ){
   // this.person= {
   //   firstname: '',
   //   lastname : '',
   //   email: '',
   //   username: '',
   //  password: ''
   // }
 }


  onSubmit(person) {
    let data = JSON.stringify(person);
    let url = 'http://localhost:8080/signup'
    let headers = new Headers(
      {
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Credentials' : true
      });
    this.http.post(url, data, {headers: headers})
      .subscribe(
        data => alert('Your account has been created!'),
        error => alert(error.json().message)
      );
    //this.signupComponent.goBack();

  }
}
