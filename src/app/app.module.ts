import { LoggedInGuard } from './guards/LoggedInGuard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { CoursesComponent, AddCourseComponent } from './pages/courses';
import { LoginComponent } from './pages/login';
import { LoginService, CourseService } from './services/';
import { NumberToTime } from './pipes/numberToTime.pipe';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, CoursesComponent, AddCourseComponent, LoginComponent, NumberToTime],
  imports: [RouterModule.forRoot(ROUTES, { useHash: true }), NgbModule.forRoot(), BrowserModule, FormsModule],
  providers: [LoginService, CourseService, LoggedInGuard]
})

export class AppModule {
}
