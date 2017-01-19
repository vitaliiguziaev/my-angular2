import { NumbersDirective } from './numbers.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

@Component({
    template: `<input id="number" type="text" numbers/>`
})
class TestComponent { }

describe('Directive - numbers', () => {
    let fixture: ComponentFixture<TestComponent>;
    let des: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NumbersDirective, TestComponent]
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        des = fixture.debugElement.query(By.css('#number'));
        el = des.nativeElement;
    });

    it('can not input letter', () => {
        const input = des.nativeElement as HTMLInputElement;
        let event = new KeyboardEvent('');
        input.dispatchEvent(event);
        fixture.detectChanges();
        expect(input.value).toBe('');
    });

    it('can not input number', () => {
        const input = des.nativeElement as HTMLInputElement;
        //  let event = new KeyboardEvent('', { 'keyCode': 52 });
        let event = new KeyboardEvent('');
        des.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(input.value).toBe('8');
    });
});