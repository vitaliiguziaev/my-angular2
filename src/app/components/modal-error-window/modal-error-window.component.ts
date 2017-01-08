import { Component, Injectable, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'modal-error-window',
    templateUrl: './modal-error-window.html',
    encapsulation: ViewEncapsulation.None,
})

@Injectable()
export class ModalErrorWindow {
    constructor(private modalService: NgbModal) { }

    open(content) {
        this.modalService.open(content, { size: 'sm' });
    }
}