import { Store, Action, combineReducers } from '@ngrx/store';
import { Injectable } from '@angular/core';


@Injectable()
export class AppActions {
    static COURSES_LOADED = "COURSES_LOADED";
    static ADD_COURSE = "ADD_COURSE";
    static EDIT_COURSE = "EDIT_COURSE";
    static DELETE_COURSE = "DELETE_COURSE";
    static FILTER_COURSES = "FILTER_COURSES";

    constructor(private _store: Store<any>) {

    }

    dispatch(type: string, payload?: any) {
        this._store.dispatch({
            type,
            payload
        });
    }
}