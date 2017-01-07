import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-courses',
  templateUrl: './searchCourses.html',
  outputs: ['onSearch']
})

export class SearchCoursesComponent {
  private onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchCourses(query: string) {
    this.onSearch.emit(query);
  }
}