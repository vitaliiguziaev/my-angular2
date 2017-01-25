import { Store, Action, combineReducers } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class AppActions {
    static COURSES_LOADED = "COURSES_LOADED";
    static GET_COURSE = "GET_COURSE";
    static FILTER_COURSES = "FILTER_COURSES";

    static ADD_COURSE = "ADD_COURSE";
    static UPDATE_COURSE = "UPDATE_COURSE";
    static DELETE_COURSE = "DELETE_COURSE";

    constructor(private _store: Store<any>) {

    }

    dispatch(type: string, payload?: any) {
        this._store.dispatch({
            type,
            payload
        });
    }
}