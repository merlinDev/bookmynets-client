import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() search = new EventEmitter();
searchText(event: any) {
try {
  this.search.emit(event);
} catch (error) {
}
  
}
}
