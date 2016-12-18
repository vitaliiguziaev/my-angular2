import {Component} from '@angular/core';
import {CourseService, Course} from './../../services/';

@Component({
    selector: 'list-courses',
    templateUrl: './courses.html'
})

export class CoursesComponent{
    courses: Course[] = [];
    constructor(private courseService: CourseService){
    }

    ngOnInit(){
      this.courses = this.courseService.getCoursesList();
    }
}