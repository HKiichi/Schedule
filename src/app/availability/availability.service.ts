/**
 * Created by ikikuchi on 5-4-2017.
 */
import {Injectable} from "@angular/core";
import {Headers, Response, Http} from "@angular/http";


import {EventEmitter} from "@angular/forms/src/facade/async";

import 'rxjs/add/operator/map';
import {Shift} from "../schedule/models/Shift";
import {Person} from "../schedule/models/Person";
import {Available} from "../schedule/models/Available";


@Injectable()

export class AvailabilityService {
  shifts: Shift[];
  person;
  availabilities: Available[];

  personChanged = new EventEmitter<Person[]>();
  shiftChanged = new EventEmitter<Shift[]>();

  constructor(private http: Http) {

  }


  fetchPerson() {
    return this.http.get('http://localhost:8080/signup')
      .map((response => response)
      )
  }
  ;


  fetchData() {
 return this.http.get('http://localhost:8080/shifts');
  }

  submitAvailability(shiftDate){
    let shiftAvailability = JSON.stringify(shiftDate);
    let url = 'http://localhost:8080/shifts/'
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.http.put(url, shiftAvailability, {headers: headers})
      .subscribe(
        data => alert('Shift updated!'),
        error => alert(error.json().message)

      );
    console.log(shiftAvailability)
  }
}




