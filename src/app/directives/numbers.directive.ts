import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: `[numbers]`
})

export class NumbersDirective {

    constructor(private el: ElementRef) {
        this.el = el;
    }

    @HostListener('keypress', ['$event']) onKeyPress($event) {
        let key = $event.keyCode || $event.which;
        let value = String.fromCharCode(key);
        let pattern = /^\d+$/;
        if (!pattern.test(value)) {
            return false;
        }
    }
}