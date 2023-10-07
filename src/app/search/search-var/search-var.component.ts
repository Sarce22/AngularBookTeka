import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-var',
  templateUrl: './search-var.component.html',
  styleUrls: ['./search-var.component.css']
})
export class SearchVarComponent {


  @Output() searchText = new EventEmitter<string>();
  searchLocalText:string =""

  onSearch() {
    this.searchText.emit(this.searchLocalText)
  }
}
