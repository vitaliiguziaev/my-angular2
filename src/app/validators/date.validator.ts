import { FormControl } from '@angular/forms';

const DATE_LENGTH = 10;
const PARTS_DATE = 3;

export function DateValidator(control: FormControl) {
    if (!control.value) {
        return null;
    }

    if (control.value.length < DATE_LENGTH) {
        return { incorrect_date: true };
    }

    let values = control.value.split('.');
    if (values.length < PARTS_DATE) {
        return { incorrect_date: true };
    }
    return null;
}