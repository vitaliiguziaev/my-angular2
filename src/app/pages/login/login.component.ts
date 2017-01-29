import { AppPaths } from './../../app.routes';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, User, BreadcrumbService } from './../../services';

@Component({
    selector: 'login-page',
    styleUrls: ['./login.css'],
    templateUrl: './login.html'
})

export class LoginComponent {
    private login: string;
    private password: string;
    private buttonIsPressed: boolean = false;

    constructor(private loginService: LoginService, private router: Router, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.clean();
        this.loginService.cleanUser();
    }

    logIn() {
        this.loginService.login(this.login, this.password)
            .subscribe(res => {
                if (res !== null) {
                    this.router.navigate([AppPaths.COURSES_PAGE]);
                } else {
                    this.password = '';
                    this.buttonIsPressed = true;
                }
            });
    }
}