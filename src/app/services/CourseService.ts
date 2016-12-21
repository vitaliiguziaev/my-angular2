import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
    constructor() {

    }

    getCoursesList(): Course[] {
        return [
            new Course(1, 'Course 1', 'description 1', 90, Date.now().toString(), 'author 1'),
            new Course(2, 'Course 2', 'description 2', 110, Date.now().toString(), 'author 2'),
            new Course(3, 'Course 3', 'description 3', 120, Date.now().toString(), 'author 3'),
            new Course(4, 'Course 4', 'description 4', 130, Date.now().toString(), 'author 4'),
        ];
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