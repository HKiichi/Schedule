import {Component, OnInit} from "@angular/core";
import {AvailabilityService} from "./availability.service";
import {Shift} from "../schedule/models/Shift";
import {Validators, FormControl, FormGroup} from "@angular/forms";

/**
 * Created by iris on 23-11-16.
 */

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html'

})

export class AvailabilityComponent implements OnInit{

  transferForm:FormGroup ;

  constructor(private as: AvailabilityService){


  this.transferForm = new FormGroup({
  name: new FormControl('', Validators.required),
  date: new FormControl({}, Validators.required),
    //id: new FormControl(this.shiftDate),
  available: new FormControl(null)
  });
}
  profile = [];
  shiftDate =[];
  selectedIndex = -1

 ngOnInit(){
   this.as.fetchPerson().subscribe(
     (result) =>{
       this.profile = result.json();
       this.handleResponse();
     }
   )
     this.as.fetchData().subscribe(
       (r)=>{
       this.shiftDate = r.json();
       this.showOutput();
       console.log("shiftDate")
       console.log(this.shiftDate);

 }
) ;
 }
 handleResponse(){
   console.log(this.profile)

 }

 showOutput(){
   console.log(this.shiftDate)
 }

 submitAvailability(formData){
   console.log(formData.date.id)
   console.log(formData.date.date)
   console.log(formData.name)
   console.log(formData.available)


   let data = {
     date :formData.date.date,
      name: formData.name,
      id: formData.date.id,
     available:formData.available
    }

   //console.log(this.shiftDate[this.selectedIndex]);
   this.as.submitAvailability(data);
 }
}
