import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {SignupService} from "./signup.service";
import {FormBuilder, Validators, FormControl} from "@angular/forms";
import {Person} from "../schedule/models/Person";
/**
 * Created by iris on 23-11-16.
 */

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'

})
export class SignUpComponent{

  person: Person= {
    firstname: '',
    lastname : '',
    email: '',
    username: '',
   password: ''
  }

  constructor(private router: Router, private fb: FormBuilder, private signUp: SignupService){

  }
// public registrationForm = this.fb.group({
  //  email: ["", Validators.required],
 //  password: ["", Validators.required]
 // });

onSubmit(person){
  this.signUp.onSubmit(person);
}


goBack(){
    this.router.navigate(['login']);
}

}
