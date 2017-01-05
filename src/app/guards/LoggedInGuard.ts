import { LoginService } from './../services/LoginService';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) {
    }

    canActivate(): boolean {
        let isLoggedIn = this.loginService.isLoggedIn();
        if (!isLoggedIn) {
            this.router.navigate(['login']);
        }
        return isLoggedIn;
    }
}