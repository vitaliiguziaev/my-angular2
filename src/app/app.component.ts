import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styles: [require('bootstrap/dist/css/bootstrap.css')],
 	template: `
<div class="container">
  <form>
    <div class="form-group row">
      <label for="login" class="col-sm-1 col-form-label">Login</label>
      <div class="col-sm-2">
        <input type="text" class="form-control" id="login" placeholder="Login">
      </div>
    </div>
    <div class="form-group row">
      <label for="password" class="col-sm-1 col-form-label">Password</label>
      <div class="col-sm-2">
        <input type="password" class="form-control" id="password" placeholder="Password">
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-sm-2 col-sm-10">
        <button type="submit" class="btn btn-primary">Enter</button>
      </div>
    </div>
  </form>
</div>
  `
})
export class AppComponent {
  constructor(){
  }
}
