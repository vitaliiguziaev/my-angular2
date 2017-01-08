/* COMPONENTS */
import { DurationComponent } from './components/duration/duration.component';
import { CourseRowComponent } from './pages/courses/courses-list/course-row/course-row.component';
import { CoursesListComponent } from './pages/courses/courses-list/courses-list.component';
import { SearchCoursesComponent } from './pages/courses/searchCourses/searchCourses.component';
import { CoursesComponent, AddCourseComponent } from './pages/courses';
import { LogoffComponent } from './components/';
import { LoginComponent } from './pages/login';
import { AppComponent } from './app.component';

/* GUARDS */
import { LoggedInGuard } from './guards/LoggedInGuard';

/* PIPES */
import { NumberToTime } from './pipes/numberToTime.pipe';

/* SERVICES */
import { LoginService, CourseService } from './services/';

/* ROUTES */
import { ROUTES } from './app.routes';

/* ANGULAR */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, CoursesComponent, AddCourseComponent, LoginComponent, NumberToTime, LogoffComponent, SearchCoursesComponent, CoursesListComponent, CourseRowComponent, DurationComponent],
  imports: [RouterModule.forRoot(ROUTES, { useHash: true }), NgbModule.forRoot(), BrowserModule, FormsModule],
  providers: [LoginService, CourseService, LoggedInGuard]
})

export class AppModule {
}
