import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class AppActions {
    static COURSES_LOADED = "COURSES_LOADED";
    static ADD_COURSE = "ADD_COURSE";
    static UPDATE_COURSE = "UPDATE_COURSE";
    static DELETE_COURSE = "DELETE_COURSE";
    static FILTER_COURSES = "FILTER_COURSES";
    static AUTHORS_LOADED = "AUTHORS_LOADED";

    static ADD_BREADCRUMB = "ADD_BREADCRUMB";
    static DELETE_BREADCRUMB = "DELETE_BREADCRUMB";
    static UPDATE_BREADCRUMB = "UPDATE_BREADCRUMB";
    static CLEAN_BREADCRUMB = "CLEAN_BREADCRUMB";

    constructor(private _store: Store<any>) {

    }

    dispatch(type: string, payload?: any) {
        this._store.dispatch({
            type,
            payload
        });
    }

    getState(): any {
        let state;
        this._store.take(1).subscribe(s => state = s);
        return state;
    }
}