import { Component } from '@angular/core';

@Component({
    selector: 'error-notification',
    styleUrls: ['./error-notification.component.css'],
    templateUrl: './error-notification.component.html'
})

export class ErrorNotificationComponent {
    private message: string;
    private isVisible: boolean = false;

    constructor() {
    }

    show(message: string) {
        this.message = message;
        this.isVisible = true;
    }

    hide() {
        this.isVisible = false;
    }
}