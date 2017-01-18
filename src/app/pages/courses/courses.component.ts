import { AppPaths } from './../../app.routes';
import { Component } from '@angular/core';
import { CourseService, Course, BreadcrumbService } from './../../services/';
import { Router } from '@angular/router';

@Component({
    selector: 'list-courses',
    templateUrl: './courses.html'
})

export class CoursesComponent {
    courses: Course[] = [];

    constructor(private courseService: CourseService, private router: Router, private breadcrumbService: BreadcrumbService) {
    }

    ngOnInit() {
        this.setBreadcrumb();
        this.getCourses();
    }

    setBreadcrumb() {
        this.breadcrumbService.clean();
        this.breadcrumbService.add(AppPaths.COURSES_PAGE, 'Courses');
    }

    getCourses() {
        this.courseService.getCoursesList().subscribe(courses => this.courses = courses);
    }

    deleteCourse(course: Course) {
        let confirmDialog = confirm("Are you sure you want to remove this course?");
        if (confirmDialog == true) {
            this.courseService.deleteCourse(course).subscribe(() => { });
            this.getCourses();
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