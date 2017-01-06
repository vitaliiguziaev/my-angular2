import { LoginService } from './../../services/LoginService';
import { Component } from '@angular/core';

@Component({
  selector: 'logoff',
  styleUrls: ['./logoff.component.css'],
  templateUrl: './logoff.component.html'
})

export class LogoffComponent {
  constructor(private loginService: LoginService) {
  }

  getUser() {
    return this.loginService.getLogin();
  }

  logOff(): boolean {
    return this.loginService.logOff();
  }
}