import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Shift} from "../schedule/models/Shift";
/**
 * Created by iris on 23-11-16.
 */

@Injectable()
export class ShiftService{


  constructor(private http:Http){}

  storesData(shifts)  {

    let body = JSON.stringify(shifts);
    let url = 'http://localhost:8080/shifts/'
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, body, {headers: headers})
      .subscribe(
        data => alert('Shift created!'),
        error => alert(error.json().message)
      );
  }

}
