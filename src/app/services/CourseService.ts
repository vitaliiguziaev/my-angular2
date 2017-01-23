import { AppActions } from './../app.actions';
import { NotificationService } from './NotificationService';
import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Author } from './AuthorService';

@Injectable()
export class CourseService {
    courses: Course[] = [];
    newId: number;

    constructor(private notification: NotificationService, private appActions: AppActions) {
        this.courses = [
            new Course(1, 'Course 1', 'description 1', 90, new Date(), [new Author(5, 'Author 5'), new Author(6, 'Author 6')]),
            new Course(2, 'Course 2', 'description 2', 110, new Date(), [new Author(5, 'Author 5')]),
            new Course(3, 'Course 3', 'description 3', 120, new Date(), [new Author(5, 'Author 5')]),
            new Course(4, 'Course 4', 'description 4', 130, new Date(), [new Author(5, 'Author 5'), new Author(6, 'Author 6')]),
        ];
        this.newId = this.courses.length;
    }

    getCourse(id: number): Observable<Course> {
        return Observable.create((observer: Observer<Course>) => {
            let course = this.courses.find(x => x.id === id);
            observer.next(course);
            observer.complete();
        });
    }

    buildCoursesList() {
        // Observable.create((observer: Observer<Array<Course>>) => {
        //     observer.next(this.courses);
        //     observer.complete();
        // }).subscribe((items: Course[]) => {
        //     items.map(x => this.appActions.dispatch(AppActions.ADD_COURSE, x));
        // });
        this.courses.map(x => this.appActions.dispatch(AppActions.ADD_COURSE, x));
    }

    addCourse(course: Course) {
        return Observable.create((observer: Observer<Course>) => {
            this.newId = this.newId + 1;
            course.id = this.newId;
            this.courses.push(course);
            observer.next(course);
            observer.complete();
        }).subscribe(x => {
            this.appActions.dispatch(AppActions.ADD_COURSE, x);
        });
    }

    editCourse(course: Course) {
        return Observable.create((observer: Observer<Course>) => {
            let ndx = this.courses.findIndex(x => x.id == course.id);
            let oldCourse = this.courses[ndx];
            let editCourse = Object.assign(oldCourse, course);
            observer.next(editCourse);
            observer.complete();
        }).subscribe(x => {
            this.appActions.dispatch(AppActions.UPDATE_COURSE, x);
        });
    }

    deleteCourse(course: Course): Observable<void> {
        return Observable.create((observer: Observer<void>) => {
            try {
                let number = this.getRandomNumber(1, 5);
                if (number % 2 == 0) {
                    throw new Error('Server return bad response!');
                }
            } catch (error) {
                this.notification.show(error);
            }
            this.courses = this.courses.filter(x => x.id !== course.id);
            observer.complete();
        }).subscribe(res => {
            this.appActions.dispatch(AppActions.DELETE_COURSE, res);
        });
    }

    searchCourses(query: string): Observable<Course[]> {
        return Observable.create((observer: Observer<Array<Course>>) => {
            if (query) {
                this.courses = this.courses.filter(x => x.title.search(new RegExp(query, 'i')) !== -1);
            }
            observer.next(this.courses);
            observer.complete();
        });
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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