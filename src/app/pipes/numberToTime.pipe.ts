import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberToTime' })
export class NumberToTime implements PipeTransform {
    FORMAT_HOURS: string = 'h';
    FORMAT_MINUTES: string = 'min';
    HOUR_IN_MINUTES: number = 60;

    transform(value: number): string {
        if (value == null || value == 0) {
            return 0 + this.FORMAT_MINUTES;
        }

        if (value < this.HOUR_IN_MINUTES) {
            return value + this.FORMAT_MINUTES;
        }

        var hours = Math.floor(value / this.HOUR_IN_MINUTES);
        var minut = value - (hours * this.HOUR_IN_MINUTES);
        return hours + this.FORMAT_HOURS + ' ' + minut + this.FORMAT_MINUTES;
    }
}
