import { ModalErrorWindow } from './../../../components/modal-error-window/modal-error-window.component';
import { Subscription } from 'rxjs/Subscription';
import { Course, CourseService } from './../../../services/CourseService';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'add-edit-course',
    templateUrl: './add-editCourse.html',
})

export class AddEditCourseComponent implements OnInit, OnDestroy {
    @ViewChild(ModalErrorWindow) modalWindow: ModalErrorWindow;
    courseForm: FormGroup;
    sub: Subscription;
    id: number;
    course: Course;
    isCreateCourse: boolean;

    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            if (!this.id) {
                this.isCreateCourse = true;
                this.course = new Course(0, 'New Course', null, null, null, null);
            } else {
                this.courseService.getCourse(this.id).subscribe(course => this.course = course);
            }
        });
        this.buildForm();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    buildForm(): void {
        this.courseForm = this.fb.group({
            'title': [this.course.title, Validators.required],
            'description': [this.course.description, Validators.required],
            'date': [this.course.date, Validators.required],
            'duration': [this.course.duration, Validators.required],
        });
    }

    save(value: any): boolean {
        if (!this.courseForm.valid) {
            let errorMessage = this.buildValidationError(value);
            this.modalWindow.open(errorMessage);
        } else {
            Object.assign(this.course, value);
            if (this.isCreateCourse) {
                this.courseService.addCourse(this.course).subscribe(course => { });
            } else {
                this.courseService.editCourse(this.course).subscribe(course => { });
            }
            this.router.navigate(['/courses']);
        }
        return false;
    }

    cancel(): boolean {
        this.router.navigate(['/courses']);
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
            'required': 'Date is required.'
        }
    };
}