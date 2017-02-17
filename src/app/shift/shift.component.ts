/**
 * Created by iris on 23-11-16.
 */
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, Validators, FormBuilder, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {ShiftService} from "./shift.service";
import {Shift} from "../schedule/models/Shift";


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',

})
export class ShiftComponent implements OnInit {
  shiftForm : FormGroup;
  shifts :Shift={
    date: '',
    time: ''
  }
  constructor(private router: Router,
  private formBuilder: FormBuilder,
  private shiftService: ShiftService){
    this.shiftForm = new FormGroup({
      'date': new FormControl('', Validators.required),
      'time': new FormControl('', Validators.required)
    });
  }

  //private initForm() {
  // let date = '';
  //   let time = '';
//  let shift: FormArray = new FormArray([]);

 //   this.shiftForm = this.formBuilder.group({
//      name: [date, Validators.required],
 //     description: [time, Validators.required],

//    });
//  }
  onCancel(){
    this.router.navigate(['/schedule'])
  }
  ngOnInit(){

  }

  storesData(shifts){
    this.shiftService.storesData(shifts);
  }
}
