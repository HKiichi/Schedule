/**
 * Created by iris on 22-11-16.
 */

import {Injectable} from "@angular/core";
import {Headers, Response, Http} from "@angular/http";
import {Person} from "./models/Person";
import {Shift} from "./models/Shift";
import {Available} from "./models/Available";
import {EventEmitter} from "@angular/forms/src/facade/async";

import 'rxjs/add/operator/map';


@Injectable()

export class ScheduleService{
  shifts:Shift[];
  persons: Person[];
  availabilities: Available[];

  personChanged = new EventEmitter<Person[]>();
  shiftChanged = new EventEmitter<Shift[]>();
  availabilityChanged = new EventEmitter<Available[]>();

  constructor(private http:Http){

}
  getPerson(){
    return this.persons;
  }

  getShifts(){
    return this.shifts;
  }

  getAvailables(){
    return this.availabilities;
  }

  fetchPerson()  {
    return this.http.get('https://.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Person[]) => {
          this.persons = data;
          this.personChanged.emit(this.persons);
        }
      );
  }

  fetchShifts()
  {
    return this.http.get('https://')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Shift[]) => {
          this.shifts = data;
          this.shiftChanged.emit(this.shifts);
        }
      );
  }

  fetchAvailability()
  {
    return this.http.get('https://')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Available[]) => {
          this.availabilities = data;
          this.availabilityChanged.emit(this.availabilities);
        }
      );
  }
}
