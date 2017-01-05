import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { LoginService } from './services';

@Component({
  selector: 'app',
  styles: [require('bootstrap/dist/css/bootstrap.css'), require('./app.component.css')],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private loginService: LoginService) {
  }

  getUser() {
    return this.loginService.getLogin();
  }

  logOff(): boolean {
    return this.loginService.logOff();
  }

}
