import { Component, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'modal-error-window',
    templateUrl: './modal-error-window.html'
})

export class ModalErrorWindow {
    constructor(private modalService: NgbModal) { }

    open(content) {
        this.modalService.open(content, { size: 'sm' });
    }
}