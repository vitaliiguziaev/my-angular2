import { breadcrumbsReducer } from './../../pages/courses/reducers/breadcrumbs.reducer';
import { Store } from '@ngrx/store';
import { BreadcrumbElement } from './breadcrumbElement';
import { BreadcrumbService } from './../../services/BreadcrumbService';
import { PageComponent } from './../../pages/page.component';
import { Injectable, Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'breadcrumb',
    template: `
      <div id="view-breadcrumb">
          <ul class="breadcrumb">
              <li *ngFor="let breadcrumb of breadcrumbs; let last = last">
                  <a *ngIf="!last" [routerLink]="breadcrumb.link">{{breadcrumb.title}}</a>
                  <span *ngIf="!last"> > </span>
                  <span *ngIf="last">{{breadcrumb.title}}</span>
              </li>
          </ul>
       </div>
    `,
    styles: [`
      #view-breadcrumb {
        margin-top: 5px;
        float:left;
      }
      ul.breadcrumb {
        background: inherit;
      }
      .breadcrumb > li {
        display: inline-block;
      }
    `]
})

export class BreadcrumbComponent extends PageComponent {
    breadcrumbs: BreadcrumbElement[];

    constructor(private router: Router, private breadcrumbService: BreadcrumbService, private store: Store<any>) {
        super(store, {breadcrumbsReducer});
    }

    onInit() {
        this._subscription(this.store.select(state => state.breadcrumbsReducer).subscribe(items => this.breadcrumbs = items));
    }
}
