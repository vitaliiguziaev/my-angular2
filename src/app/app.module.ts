/* COMPONENTS */
import { CoursesComponent, AddEditCourseComponent, SearchCoursesComponent, CoursesListComponent, CourseRowComponent } from './pages/courses';
import { LogoffComponent, DurationComponent, ModalErrorWindow, ModalContent, BreadcrumbComponent } from './components';
import { LoginComponent } from './pages/login';
import { AppComponent } from './app.component';

/* DIRECTIVES */
import { DateLimiterDirective } from './directives';

/* GUARDS */
import { LoggedInGuard } from './guards';

/* PIPES */
import { NumberToTime } from './pipes';

/* SERVICES */
import { LoginService, CourseService, BreadcrumbService, AuthorService } from './services/';

/* ROUTES */
import { ROUTES } from './app.routes';

/* ANGULAR */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    BreadcrumbComponent
  ],
  entryComponents: [ModalContent],
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    CourseService,
    AuthorService,
    LoggedInGuard,
    BreadcrumbService
  ]
})

export class AppModule {
}
