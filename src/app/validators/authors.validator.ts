import { FormControl } from '@angular/forms';

export function AuthorsValidator(control: FormControl) {
    if (control.value && control.value.length > 0) {
        return null;
    }
    return  { authors_length: true };
}