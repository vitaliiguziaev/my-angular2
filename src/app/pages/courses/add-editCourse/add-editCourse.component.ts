import { coursesReducer } from './../courses.reducers';
import { AppActions } from './../../../app.actions';
import { Store } from '@ngrx/store';
import { AppPaths } from './../../../app.routes';
import { AuthorsValidator, DateValidator } from './../../../validators';
import { ModalErrorWindow } from './../../../components';
import { Subscription } from 'rxjs/Subscription';
import { Course, CourseService, Author, AuthorService, BreadcrumbService } from './../../../services';
import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageComponent } from './../../page.component';

@Component({
    selector: 'add-edit-course',
    templateUrl: './add-editCourse.html',
    providers: [AuthorService]
})

export class AddEditCourseComponent extends PageComponent {
    @ViewChild(ModalErrorWindow) modalWindow: ModalErrorWindow;
    courseForm: FormGroup;
    sub: Subscription;
    id: number;
    course: Course;
    isCreateCourse: boolean;
    breadcrumbLink: string;
    allAuthors: Author[];
    authors: Author[];

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private breadcrumbService: BreadcrumbService,
        private authorService: AuthorService,
        private store: Store<any>,
        private appActions: AppActions
    ) { super(store, { coursesReducer }); }
   
    onInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (!this.id) {
                this.isCreateCourse = true;
                this.course = new Course(0, 'New Course', null, null, null, null);
            }
        });
        
        if (!this.isCreateCourse) {
           this.course = this.courseService.getCourse(this.id);
        } 

        this.authors = this.course.authors;
        this.authorService.getAuthorsList().subscribe(authorsFromService => {
            if (!this.authors) {
                this.allAuthors = authorsFromService;
            } else {
                this.allAuthors = authorsFromService.filter(x => !this.authors.find(z => z.id == x.id));
            }
        });

        this.setBreadcrumb();
        this.buildForm();
    }

    setBreadcrumb() {
        this.breadcrumbService.clean();
        this.breadcrumbLink = AppPaths.COURSES_PAGE;
        this.breadcrumbService.add(this.breadcrumbLink, 'Courses');

        if (this.isCreateCourse) {
            this.breadcrumbLink = this.breadcrumbLink + '/new';
        } else {
            this.breadcrumbLink = this.breadcrumbLink + '/' + this.id;
        }
        this.breadcrumbService.add(this.breadcrumbLink, this.course.title);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    buildForm(): void {
        let datePipe = new DatePipe('En-us');
        this.courseForm = this.fb.group({
            'title': [this.course.title, Validators.required],
            'description': [this.course.description, Validators.required],
            'date': [datePipe.transform(this.course.date, 'dd.MM.yyyy'), [Validators.required, DateValidator]],
            'duration': [this.course.duration, Validators.required],
            'authors': [this.course.authors, AuthorsValidator]
        });

        this.courseForm.controls['title'].valueChanges.subscribe((title: string) => {
            this.breadcrumbService.updateTitle(this.breadcrumbLink, title);
        });
    }

    getCourseDate(date) {
        let partDate = date.split('.');
        return new Date(+partDate[2], +partDate[1] - 1, +partDate[0]);
    }

    onSelectAuthor(id: number, authors: Author[]) {
        if (authors && authors.length > 0) {
            let ndx = authors.findIndex(x => x.id === id);
            authors[ndx].isSelected = true;
            authors.forEach(x => {
                if (x.isSelected && x.id !== id) {
                    x.isSelected = false;
                }
            });
        }
    }

    moveAuthorInAll() {
        if (!this.authors || this.authors.length == 0) {
            return;
        }

        let ndx = this.authors.findIndex(x => x.isSelected);
        if (ndx >= 0) {
            this.allAuthors = this.allAuthors || [];
            let moveAuthor = this.authors[ndx];
            moveAuthor.isSelected = false;
            this.allAuthors.push(moveAuthor);
            this.authors.splice(ndx, 1);
            this.courseForm.controls['authors'].setValue(this.authors);
        }
    }

    moveAuthorFromAll() {
        if (!this.allAuthors || this.allAuthors.length == 0) {
            return;
        }

        let ndx = this.allAuthors.findIndex(x => x.isSelected);
        if (ndx >= 0) {
            this.authors = this.authors || [];
            let moveAuthor = this.allAuthors[ndx];
            moveAuthor.isSelected = false;
            this.authors.push(moveAuthor);
            this.allAuthors.splice(ndx, 1);
            this.courseForm.controls['authors'].setValue(this.authors);
        }
    }

    save(value: any): boolean {
        if (!this.courseForm.valid) {
            let errorMessage = this.buildValidationError(value);
            this.modalWindow.open(errorMessage);
        } else {
            this.course.title = value.title;
            this.course.description = value.description;
            this.course.date = this.getCourseDate(value.date);
            this.course.duration = value.duration;
            this.course.authors = this.authors;

            if (this.isCreateCourse) {
                this.courseService.addCourse(this.course);
            } else {
                this.courseService.editCourse(this.course);
            }
            this.router.navigate([AppPaths.COURSES_PAGE]);
        }
        return false;
    }

    cancel(): boolean {
        this.router.navigate([AppPaths.COURSES_PAGE]);
        return false;
    }

    buildValidationError(value: any): string {
        let form = this.courseForm;
        for (const field in this.courseForm.controls) {
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }

        let errorMessage = '';
        for (const key in this.formErrors) {
            let error = this.formErrors[key];
            if (error) {
                errorMessage += error + '\r\n';
            }
        }
        return errorMessage;
    }

    formErrors = {
        'title': '',
        'description': '',
        'date': '',
        'duration': ''
    }

    validationMessages = {
        'title': {
            'required': 'Title is required.',
        },
        'description': {
            'required': 'Description is required.'
        },
        'duration': {
            'required': 'Duration is required.',
        },
        'date': {
            'required': 'Date is required.',
            'incorrect_date': 'Date is incorrect (required format dd.MM.yyyy).'
        },
        'authors': {
            'authors_length': 'Authors is required.'
        }
    };
}