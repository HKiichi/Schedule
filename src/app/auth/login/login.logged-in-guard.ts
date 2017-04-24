import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {LoginService} from "./login.service";
/**
 * Created by ikikuchi on 9-1-2017.
 */



@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private login : LoginService) {}

    canActivate() {
        return this.login.isLoggedIn();
    }
}