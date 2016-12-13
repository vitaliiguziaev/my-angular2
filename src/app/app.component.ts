import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <h2>Hello {{text}}</h2>
  `
})
export class AppComponent {
  text:string;
  constructor(){
    this.text = "My Angular 2!"
  }
}
