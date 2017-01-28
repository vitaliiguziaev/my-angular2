import { NumberToTime } from './../../pipes/numberToTime.pipe';
import { DurationComponent } from './duration.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Duration component', () => {
    let fixture: ComponentFixture<DurationComponent>;
    let des: DebugElement;
    let el: HTMLElement;
    let comp: DurationComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NumberToTime, DurationComponent],
        });

        fixture = TestBed.createComponent(DurationComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
        des = fixture.debugElement.query(By.css('span'));
        el = des.nativeElement;
    });

    it('value 100 as 1h 40min', () => {
        comp.duration = 100;
        fixture.detectChanges();
        expect(el.textContent).toContain('1h 40min');
    });

    it('value 0 as 0min', () => {
        comp.duration = 0;
        fixture.detectChanges();
        expect(el.textContent).toContain('0min');
    });
});