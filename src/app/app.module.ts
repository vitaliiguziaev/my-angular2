import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { CoursesComponent } from './pages/courses';
import { LoginComponent } from './pages/login';
import { LoginService, CourseService } from './services/';
import { ROUTES } from './app.routes';
import { FormsModule }  from '@angular/forms';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, CoursesComponent, LoginComponent ],
  imports: [ RouterModule.forRoot(ROUTES, { useHash: true }), NgbModule.forRoot(), BrowserModule, FormsModule],
  providers: [LoginService, CourseService]
})

export class AppModule {
}
