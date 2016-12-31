import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
    private authors: Author[];
    constructor() {
        this.authors = [
            new Author(1, 'author 1'),
            new Author(2, 'author 2'),
            new Author(3, 'author 3')
        ];
    }
    
    getAuthorsList(): Author[] {
        return this.authors;
    }
}

export class Author {
    constructor(
        public id: number,
        public name: string
    )
    { }
}