import { Course, CourseService } from './../../../services/CourseService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'add-course',
    templateUrl: './addCourse.html',
})

export class AddCourseComponent implements OnInit {
    course: Course;

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.courseService.getCourse(+params['id']))
            .subscribe(course => this.course = course);
    }

    save(): boolean {
        this.router.navigate(['/courses']);
        return false;
    }

    cancel(): boolean {
        this.router.navigate(['/courses']);
        return false;
    }
}