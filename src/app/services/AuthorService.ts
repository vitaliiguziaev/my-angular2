import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
    private authors: Author[];
    constructor() {
        this.authors = [
            new Author(1, 'Author 1'),
            new Author(2, 'Author 2'),
            new Author(3, 'Author 3'),
            new Author(4, 'Author 4'),
            new Author(5, 'Author 5'),
            new Author(6, 'Author 6'),
        ];
    }
    getAuthorsList(): Observable<Author[]> {
        return Observable.create((observer: Observer<Author[]>) => {
            observer.next(this.authors);
            observer.complete();
        });
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