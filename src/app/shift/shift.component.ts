/**
 * Created by iris on 23-11-16.
 */
import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {ShiftService} from "./shift.service";
import {Shift} from "../schedule/models/Shift";


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',

})
export class ShiftComponent implements OnInit {
  shiftForm: FormGroup;

  shifts: Shift ={
    datum: '',
    time: ''
}


  constructor(private router: Router,
              private shiftService: ShiftService) {

    this.shiftForm = new FormGroup({
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required)
    });

  }

  onCancel() {
    this.router.navigate(['/schedule'])
  }

  ngOnInit() {

  }

  storingData(shiftForm) {
    console.log(shiftForm);
   let shifts = shiftForm;
    this.shiftService.storesData(shifts);

    this.shiftForm.setValue({
     date: '',
     time: ''

     });
    //console.log(shiftForm.value.inputdate);
   // console.log(shifts);

  }
}
