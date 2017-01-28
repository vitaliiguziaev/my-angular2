import { NumberToTime } from './../../../../pipes/numberToTime.pipe';
import { Course } from './../../../../services/CourseService';
import { CourseRowComponent } from './course-row.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

describe('CourseRow component', () => {
    let fixture: ComponentFixture<CourseRowComponent>;
    let editButton: DebugElement;
    let delButton: DebugElement;
    let comp: CourseRowComponent;
    let expectedCourse: Course;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NumberToTime, CourseRowComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CourseRowComponent);
        comp = fixture.componentInstance;
        expectedCourse = new Course(1, 'Course1', 'ds', 23, new Date(), null);
        comp.course = expectedCourse;
        spyOn(comp.onEditCourse, 'emit');
        spyOn(comp.onDeleteCourse, 'emit');
        fixture.detectChanges();
    });

    it('event when clicked Edit', () => {
        let edit = fixture.debugElement.query(By.css('.edit-course'));
        const button = edit.nativeElement as HTMLButtonElement;
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(comp.onEditCourse.emit).toHaveBeenCalledWith(expectedCourse);
    });

    it('event when clicked Delete', () => {
        let del = fixture.debugElement.query(By.css('.delete-course'));
        const button = del.nativeElement as HTMLButtonElement;
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(comp.onDeleteCourse.emit).toHaveBeenCalledWith(expectedCourse);
    });
});