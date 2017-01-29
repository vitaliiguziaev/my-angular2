import { AppPaths } from './../app.routes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    static LOGIN_KEY = 'login';

    constructor(private router: Router) {

    }

    login(login: string, password: string): Observable<User> {
        return Observable.create(observer => {
            setTimeout(() => {
                var user = null;
                let isCorrect = (login == 'q') && (password == 'q');
                if (isCorrect) {
                    user = new User('q', null);
                    localStorage.setItem(LoginService.LOGIN_KEY, user.login);
                }
                observer.next(user);
            }, 1000);
        });
    }

    isLoggedIn() {
        return !!localStorage.getItem(LoginService.LOGIN_KEY);
    }

    logOff(): boolean {
        this.cleanUser();
        this.router.navigate([AppPaths.LOGIN_PAGE]);
        return false;
    }

    cleanUser(){
        localStorage.removeItem(LoginService.LOGIN_KEY);
    }

    getLogin() {
        return localStorage.getItem(LoginService.LOGIN_KEY);
    }
}

export class User {
    constructor(public login: string, public password: string) { }
}