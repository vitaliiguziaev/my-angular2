import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    static LOGIN_KEY = 'login';

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
    
    logOff() {
        localStorage.removeItem(LoginService.LOGIN_KEY);
    }

    getLogin(){
        return localStorage.getItem(LoginService.LOGIN_KEY);
    }
}

export class User {
    constructor(public login: string, public password: string) { }
}