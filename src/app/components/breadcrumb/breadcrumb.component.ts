import { BreadcrumbElement } from './breadcrumbElement';
import { BreadcrumbService } from './../../services/BreadcrumbService';

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
export class BreadcrumbComponent {
    breadcrumbs: BreadcrumbElement[];

    constructor(private router: Router, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbs = this.breadcrumbService.gets();
    }
}
