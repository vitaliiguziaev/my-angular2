import { Course } from './../../../../services';
import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'course-row',
    template: require('./course-row.html'),
    inputs: ['course'],
    outputs: ['onEditCourse', 'onDeleteCourse']
})

export class CourseRowComponent {
    course: Course;
    onEditCourse: EventEmitter<Course> = new EventEmitter<Course>();
    onDeleteCourse: EventEmitter<Course> = new EventEmitter<Course>();
}