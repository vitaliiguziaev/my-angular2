import { NumberToTime } from './../../pipes/numberToTime.pipe';
import { Component } from '@angular/core';

@Component({
    selector: 'duration-view',
    template: '<span>{{duration | numberToTime}}</span>',
    inputs: ['duration']
})

export class DurationComponent {
    duration: number;
}