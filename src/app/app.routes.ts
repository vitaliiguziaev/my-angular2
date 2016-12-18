import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login';
import { CoursesComponent } from './pages/courses';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses',  component: CoursesComponent },
  // { path: 'courses/:id',  component: AddCourseComponent},
  // { path: 'courses/new',  component: NewCourseComponent}
];