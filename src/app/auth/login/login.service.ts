import {Headers, Http} from "@angular/http";
import {Injectable} from "@angular/core";

/**
 * Created by iris on 25-11-16.
 */

@Injectable()
export class LoginService {

  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(username, password) {
    let data1 = JSON.stringify(username, password);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post('http://localhost:8080/login',
        data1, {headers: headers}
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}


 // sendCredential(username: string, password: string) {
 //   let url = "http://localhost:8080/signup";
 //   let params = 'username=' + username + '&password=' + password;
 //   let headers = new Headers(
 //     {
  //      'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Credentials' : true
 //     });
//    return this.http.post(url, params, {headers: headers, withCredentials: true});
//  }

  //logout() {
  //  let url = "http://localhost:8080/logout";
 //   return this.http.get(url, {withCredentials: true});
 // }

