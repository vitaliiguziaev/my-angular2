import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: `[numbers]`
})
export class NumbersDirective {

    constructor(private el: ElementRef, private input: NgControl) {
        this.el = el;
    }

    isValid(value) {
        let pattern = /\D+/ig;
        return !pattern.test(value);
    }

    handleEvent($event) {
        console.log($event);
        const value = this.el.nativeElement.value;
        if (!this.isValid(value)) {
            const intValue = parseInt(value, 10)
            this.input.control.setValue(isNaN(intValue) ? '' : `${intValue}`);
        }
    }

    @HostListener('input', ['$event']) onKeyPress($event) {
        this.handleEvent($event)
    }

    @HostListener('change', ['$event']) onChange($event) {
        this.handleEvent($event)
    }
}