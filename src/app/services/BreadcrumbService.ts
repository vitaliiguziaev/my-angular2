import { BreadcrumbElement } from './../components/breadcrumb/breadcrumbElement';
import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbService {
    private breadcrumbs: BreadcrumbElement[] = [];

    gets() {
        return this.breadcrumbs;
    }

    add(value: BreadcrumbElement) {
        this.breadcrumbs.push(value);
    }

    updateTitle(updatedBreadcrumb: BreadcrumbElement) {
        let ndx = this.breadcrumbs.findIndex(x => x.link == updatedBreadcrumb.link);
        this.breadcrumbs[ndx].title = updatedBreadcrumb.title;
    }

    clean(){
        this.breadcrumbs.length = 0;
    }
}
