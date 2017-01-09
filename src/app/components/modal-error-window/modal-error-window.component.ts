import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'modal-content',
    templateUrl: './modal-error-window.html',
})
export class ModalContent{
    @Input() content;

    constructor(public activeModal: NgbActiveModal){}
}

@Component({
    selector: 'modal-error-window',
    template: '<div></div>',
})

export class ModalErrorWindow {
    constructor(private modalService: NgbModal) { }

    open(content) {
        const modalRef = this.modalService.open(ModalContent);
        modalRef.componentInstance.content = content;
    }
}