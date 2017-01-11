import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: `[date-limiter]`
})

export class DateLimiterDirective {

    constructor(private el: ElementRef) {
        this.el = el;
    }

    @HostListener('keypress', ['$event']) onKeyPress($event) {
        let inputPosition = this.el.nativeElement.selectionStart;
        let oldValue = this.el.nativeElement.value;
        let inputKey = $event.key;
        let newValue = this.getNewValue(oldValue, inputKey, inputPosition);
        if (!this.checkValue(newValue)) {
            return false;
        }
    }

    @HostListener('paste', ['$event']) onPaste($event) {
        let inputPosition = this.el.nativeElement.selectionStart;
        let oldValue = this.el.nativeElement.value;
        let inputValue = $event.clipboardData.getData('Text');
        let newValue = this.getNewValue(oldValue, inputValue, inputPosition);
        if (!this.checkValue(newValue)) {
            return false;
        }
    }

    getNewValue(oldValue, inputKey, inputPosition) {
        return [oldValue.slice(0, inputPosition), inputKey, oldValue.slice(inputPosition)].join('');
    }

    checkValue(value) {
        let regex = [new RegExp('^[0-9]{1,2}$'), new RegExp('^[0-9]{1,2}[\.]+$'), new RegExp('^[0-9]{1,2}[\.]+[0-9]{1,2}$'),
        new RegExp('^[0-9]{1,2}[\.]+[0-9]{1,2}[\.]+$'), new RegExp('^[0-9]{1,2}[\.]+[0-9]{1,2}[\.]+[0-9]{1,4}$')];
        return regex.some(x => x.test(value));
    }
}