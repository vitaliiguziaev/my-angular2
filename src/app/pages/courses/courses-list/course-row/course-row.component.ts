import { Course } from './../../../../services';
import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'course-row',
    templateUrl: './course-row.html',
    inputs: ['course'],
    outputs: ['onEditCourse', 'onDeleteCourse']
})

export class CourseRowComponent {
    private course: Course;
    private onEditCourse: EventEmitter<Course> = new EventEmitter<Course>();
    private onDeleteCourse: EventEmitter<Course> = new EventEmitter<Course>();
}