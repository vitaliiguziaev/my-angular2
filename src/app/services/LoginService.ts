import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
    static LOGIN_KEY = 'login';

    login(login:string, password:string):Observable<boolean>{
        return Observable.create(observer=> {
            setTimeout(()=> {
                let result = (login !== 'q') && (password !== 'q');
                if (result) {
                    localStorage.setItem(LoginService.LOGIN_KEY,login);
                }
                observer.next(result);
            }, 1000);
        });
    }

    isLoggedIn(){
        return !!localStorage.getItem(LoginService.LOGIN_KEY);
    }

    logOff(){
        localStorage.removeItem(LoginService.LOGIN_KEY);
    }
}