import { Course } from './../../../services/CourseService';
import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'courses-list',
    templateUrl: './courses-list.html',
    inputs: ['courses'],
    outputs: ['onEditCourse', 'onDeleteCourse']
})

export class CoursesListComponent {
    private courses: Course[];
    private onEditCourse: EventEmitter<Course> = new EventEmitter<Course>();
    private onDeleteCourse: EventEmitter<Course> = new EventEmitter<Course>();

    editCourse(course: Course) {
        this.onEditCourse.emit(course);
    }

    deleteCourse(course: Course) {
        this.onDeleteCourse.emit(course);
    }
}