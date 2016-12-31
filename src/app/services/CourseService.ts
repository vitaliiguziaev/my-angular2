import { Injectable } from '@angular/core';
import { Author } from './AuthorService';

@Injectable()
export class CourseService {
    private courses: Course[];
    constructor() {
        this.courses = [
            new Course(1, 'Course 1', 'description 1', 90, new Date(), null),
            new Course(2, 'Course 2', 'description 2', 110, new Date(), null),
            new Course(3, 'Course 3', 'description 3', 120, new Date(), null),
            new Course(4, 'Course 4', 'description 4', 130, new Date(), null),
        ];
    }

    getCoursesList(): Course[] {
        return this.courses;
    }

    deleteCourse(course: Course) {
        this.courses = this.courses.filter(x => x.id !== course.id);
    }

    searchCourses(query: string) {
        if (!query) {
            return this.courses;
        }
        return this.courses.filter(x => x.title.search(new RegExp(query, "i")) != -1);
    }

}

export class Course {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public duration: number,
        public date: Date,
        public authors: Author[]
    )
    { }
}