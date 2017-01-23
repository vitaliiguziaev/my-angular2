import { NumbersDirective } from './numbers.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    template: `<input id="number" type="text" numbers [formControl]="form.controls.title"/>`
})
class TestComponent {
    form: FormGroup;
    title: string;

    constructor(private fb: FormBuilder){
        this.form = this.fb.group({
            title: [this.title]
        });
    }
 }

describe('Directive - numbers', () => {
    let fixture: ComponentFixture<TestComponent>;
    let des: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ ReactiveFormsModule ],
            declarations: [NumbersDirective, TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        des = fixture.debugElement.query(By.css('#number'));
        el = des.nativeElement;
    });

    it('can not input letter', () => {
        const input = des.nativeElement as HTMLInputElement;
        input.value = 'it is not going to work';
        let event = new Event('input');
        input.dispatchEvent(event);
        fixture.detectChanges();
        expect(input.value).toBe('');
    });

    it('can input number', () => {
        const input = des.nativeElement as HTMLInputElement;
        input.value = '452 this part should be removed';
        let event = new Event('input');
        des.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(input.value).toBe('452');
    });
});