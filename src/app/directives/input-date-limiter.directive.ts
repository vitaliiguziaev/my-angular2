import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: `[date-limiter]`
})

export class InputDateLimiterDirective {

    constructor(private el: ElementRef) {
        this.el = el;
    }
    
}