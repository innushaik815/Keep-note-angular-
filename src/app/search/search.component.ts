import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // @Output() filteredSearch= new EventEmitter();
  // searched:any="";
  // searchOn(){
  //   this.filteredSearch.emit(this.searched)
  // }
  @Output() 
  filteredSearch = new EventEmitter();
  searchTerm:any=""
  onSearch() {
    this.filteredSearch.emit(this.searchTerm);
  }
}
