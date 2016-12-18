import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  styles: [require('bootstrap/dist/css/bootstrap.css')],
 	template: `
    <header>
        <nav class="navbar navbar-light bg-faded">
          <h1 class="navbar-brand mb-0">App</h1>
        </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
    
    <footer>
      <span>Copyright 2016-2017</span>
    </footer>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(){
  }
}
