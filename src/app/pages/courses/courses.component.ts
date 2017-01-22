import { AppActions } from './../../app.actions';
import { PageComponent } from './../page.component';
import { courseListReducers } from './courses.reducers';
import { Store, Action, combineReducers } from '@ngrx/store';
import { AppPaths } from './../../app.routes';
import { Component } from '@angular/core';
import { CourseService, Course, BreadcrumbService } from './../../services/';
import { Router } from '@angular/router';

@Component({
    selector: 'list-courses',
    templateUrl: './courses.html'
})

export class CoursesComponent extends PageComponent {
    courses: Course[] = [];

    constructor(private courseService: CourseService, private router: Router, private breadcrumbService: BreadcrumbService, private store: Store<any>, private appActions: AppActions) {
        super(store, courseListReducers);
    }

    ngOnInit() {
        // this.courseService.getCoursesList();
        this.setBreadcrumb();
    }

    onInit() {
        this._subscription(
            this.store.select('courses').subscribe((items: Course[]) => this.courses = items)
        );
    }

    setBreadcrumb() {
        this.breadcrumbService.clean();
        this.breadcrumbService.add(AppPaths.COURSES_PAGE, 'Courses');
    }

    deleteCourse(course: Course) {
        let confirmDialog = confirm("Are you sure you want to remove this course?");
        if (confirmDialog == true) {
            this.courseService.deleteCourse(course).subscribe(() => { });
            // this.getCourses();
        }
    }

    editCourse(course: Course) {
        this.router.navigate([AppPaths.COURSES_PAGE, course.id]);
    }

    addCourse() {
        this.router.navigate([AppPaths.COURSES_PAGE + '/new']);
    }

    searchCourses(query: string) {
        this.courseService.searchCourses(query).subscribe(courses => this.courses = courses);
    }
}