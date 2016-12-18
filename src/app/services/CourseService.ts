import {Injectable} from '@angular/core';

@Injectable()
export class CourseService{
    constructor(){

    }

    getCoursesList(): Course[]{
      return [
          new Course(1,'Course 1', Date.now().toString() , 90, " "),
          new Course(2,'Course 2', Date.now().toString() , 100, " "),
          new Course(3,'Course 3', Date.now().toString() , 110, " "),
          new Course(4,'Course 4', Date.now().toString() , 120, " "),
      ];
    }
}

export class Course {
    constructor(
        public id: number,
        public name: string,
        public created: string,
        public duration: number,
        public authors: string
        )
        { }
}