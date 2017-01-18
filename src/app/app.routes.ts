import { Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login';
import { CoursesComponent, AddEditCourseComponent } from './pages/courses';
import { LoggedInGuard } from './guards';

@Injectable()
export class AppPaths {
  public static readonly LOGIN_PAGE = 'login';
  public static readonly COURSES_PAGE = 'courses';
}

export const ROUTES: Routes = [
  { path: AppPaths.LOGIN_PAGE, component: LoginComponent },
  { path: '', redirectTo: AppPaths.LOGIN_PAGE, pathMatch: 'full' },
  { path: AppPaths.COURSES_PAGE, component: CoursesComponent, canActivate: [LoggedInGuard] },
  { path: AppPaths.COURSES_PAGE + '/:id', component: AddEditCourseComponent, canActivate: [LoggedInGuard] },
  { path: AppPaths.COURSES_PAGE + '/new', component: AddEditCourseComponent, canActivate: [LoggedInGuard] },
  { path: '**', component: CoursesComponent, canActivate: [LoggedInGuard] }
];