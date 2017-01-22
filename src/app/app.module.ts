import { courseListReducers } from './pages/courses/courses.reducers';
/* CONSTANTS */
import { AppPaths } from './app.routes';

/* COMPONENTS */
import { CoursesComponent, AddEditCourseComponent, SearchCoursesComponent, CoursesListComponent, CourseRowComponent } from './pages/courses';
import { LogoffComponent, DurationComponent, ModalErrorWindow, ModalContent, BreadcrumbComponent, ErrorNotificationComponent } from './components';
import { LoginComponent } from './pages/login';
import { AppComponent } from './app.component';

/* DIRECTIVES */
import { DateLimiterDirective, NumbersDirective } from './directives';

/* GUARDS */
import { LoggedInGuard } from './guards';

/* PIPES */
import { NumberToTime } from './pipes';

/* SERVICES */
import { LoginService, CourseService, BreadcrumbService, AuthorService, NotificationService } from './services/';

/* ROUTES */
import { ROUTES } from './app.routes';

/* REDUX */
import { AppActions } from './app.actions';

/* ANGULAR */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CoursesComponent,
    AddEditCourseComponent,
    LoginComponent,
    NumberToTime,
    LogoffComponent,
    SearchCoursesComponent,
    CoursesListComponent,
    CourseRowComponent,
    DurationComponent,
    ModalErrorWindow,
    ModalContent,
    DateLimiterDirective,
    NumbersDirective,
    BreadcrumbComponent,
    ErrorNotificationComponent
  ],
  entryComponents: [ModalContent],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.provideStore({courses: courseListReducers})
  ],
  providers: [
    AppPaths,
    LoginService,
    CourseService,
    AuthorService,
    LoggedInGuard,
    BreadcrumbService,
    ErrorNotificationComponent,
    NotificationService,
    AppActions
  ]
})

export class AppModule {
}
