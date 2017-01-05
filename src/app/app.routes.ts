import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login';
import { CoursesComponent, AddCourseComponent } from './pages/courses';
import { LoggedInGuard } from './guards/LoggedInGuard';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent, canActivate: [LoggedInGuard] },
  { path: 'courses/:id', component: AddCourseComponent, canActivate: [LoggedInGuard] },
  { path: 'courses/new', component: AddCourseComponent, canActivate: [LoggedInGuard] },
  { path: '**', component: CoursesComponent, canActivate: [LoggedInGuard] }
];