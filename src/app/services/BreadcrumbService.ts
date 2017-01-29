import { AppActions } from './../app.actions';
import { Store } from '@ngrx/store';
import { BreadcrumbElement } from './../components/breadcrumb/breadcrumbElement';
import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbService {
    private breadcrumbs: BreadcrumbElement[] = [];

    constructor(private appActions: AppActions) {
    }

    add(id: number, link: string, title: string) {
        let breadcrumb = new BreadcrumbElement(id, link, title);
        this.appActions.dispatch(AppActions.ADD_BREADCRUMB, breadcrumb);
    }

    update(id: number, link: string, title: string) {
        let breadcrumb = new BreadcrumbElement(id, link, title);
        this.appActions.dispatch(AppActions.UPDATE_BREADCRUMB, breadcrumb);
    }

    delete(id: number) {
        this.appActions.dispatch(AppActions.DELETE_BREADCRUMB, id);
    }

    clean() {
        this.appActions.dispatch(AppActions.CLEAN_BREADCRUMB);
    }
}
