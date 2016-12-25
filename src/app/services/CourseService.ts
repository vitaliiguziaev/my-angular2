import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
    private courses: Course[];
    constructor() {
        this.courses = [
            new Course(1, 'Course 1', 'description 1', 90, Date.now().toString(), 'author 1'),
            new Course(2, 'Course 2', 'description 2', 110, Date.now().toString(), 'author 2'),
            new Course(3, 'Course 3', 'description 3', 120, Date.now().toString(), 'author 3'),
            new Course(4, 'Course 4', 'description 4', 130, Date.now().toString(), 'author 4'),
        ];
    }

    getCoursesList(): Course[] {
        return this.courses;
    }

    deleteCourse(course: Course) {
        this.courses = this.courses.filter(x => x.id !== course.id);
    }
}

export class Course {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public duration: number,
        public date: string,
        public authors: string
    )
    { }
}