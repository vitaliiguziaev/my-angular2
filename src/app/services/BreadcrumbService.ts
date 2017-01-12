import { BreadcrumbElement } from './../components/breadcrumb/breadcrumbElement';
import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbService {
    private breadcrumbs: BreadcrumbElement[] = [];

    gets() {
        return this.breadcrumbs;
    }

    add(link: string, title: string) {
        this.breadcrumbs.push(new BreadcrumbElement(link, title));
    }

    updateTitle(link: string, title: string) {
        let ndx = this.breadcrumbs.findIndex(x => x.link == link);
        this.breadcrumbs[ndx].title = title;
    }

    clean() {
        this.breadcrumbs.length = 0;
    }
}
