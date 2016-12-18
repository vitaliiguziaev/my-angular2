import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './../../services/LoginService';

@Component({
    selector: 'login-page',
    styleUrls: ['./login.css'],
    templateUrl: './login.html'
})

export class LoginComponent{
    @Input('login') login: string = '';
    @Input('password') password: string = '';

    constructor(private loginService: LoginService, private router: Router){

    }

    logIn(){
        this.loginService.login(this.login,this.password)
            .subscribe(res=>{
                if (res) {
                    this.router.navigate(['/courses']);
                }
            });
    }
}