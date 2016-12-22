import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, User } from './../../services';

@Component({
    selector: 'login-page',
    // styleUrls: ['./login.css'],
    templateUrl: './login.html'
})

export class LoginComponent {
    private login: string;
    private password: string;
    private buttonIsPressed: boolean = false;

    constructor(private loginService: LoginService, private router: Router) {
    }

    logIn() {
        this.loginService.login(this.login, this.password)
            .subscribe(res => {
                if (res !== null) {
                    this.router.navigate(['/courses']);
                } else {                    
                    this.password = '';
                    this.buttonIsPressed = true;
                }
            });
    }
}