import { ErrorNotificationComponent } from './../components';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

    constructor(private notification: ErrorNotificationComponent) {
    }

    show(error) {
        this.notification.show(error);
        console.log(error);
    }
}