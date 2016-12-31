import { Component } from '@angular/core';
import { CourseService, Course } from './../../services/';
import { Router } from '@angular/router';

@Component({
    selector: 'list-courses',
    templateUrl: './courses.html'
})

export class CoursesComponent {
    courses: Course[] = [];
    constructor(private courseService: CourseService, private router: Router) {
    }

    ngOnInit() {
        this.courses = this.courseService.getCoursesList();
    }

    deleteCourse(course: Course) {
        var confirmDialog = confirm("Are you sure you want to remove this course?");
        if (confirmDialog == true) {
            this.courseService.deleteCourse(course);
            this.courses = this.courseService.getCoursesList();
        }
    }

    editCourse(course: Course) {
        this.router.navigate(['/courses', course.id]);
    }

    addCourse() {
        this.router.navigate(['/courses/new']);
    }

    searchCourses(query: string) {
        this.courses = this.courseService.searchCourses(query);
    }
}