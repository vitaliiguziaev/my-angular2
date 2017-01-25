import { authorsReducer } from './../pages/courses/reducers/authors.reducers';
import { AppActions } from './../app.actions';
import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
    private authors: Author[];
    constructor(private appActions: AppActions) {
        this.authors = [
            new Author(1, 'Author 1'),
            new Author(2, 'Author 2'),
            new Author(3, 'Author 3'),
            new Author(4, 'Author 4'),
            new Author(5, 'Author 5'),
            new Author(6, 'Author 6'),
        ];
        this.buildAuthorsList();
    }

    getAuthorsFromStore() {
        let state = this.appActions.getState();
        return state.authorsReducer;
    }

    buildAuthorsList() {
        this.appActions.dispatch(AppActions.AUTHORS_LOADED, this.authors);
    }
}

export class Author {
    isSelected: boolean
    constructor(
        public id: number,
        public name: string
    ) {
    }
}