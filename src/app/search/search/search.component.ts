import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/books/book';
import { Contants } from 'src/app/constants/constants';
import { SearchService } from '../search.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchKeyword: string = ""
  books:Book[]=[]
  
  constructor(private activatedRoute:ActivatedRoute,private searchService: SearchService) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchKeyword = params['keyword']
      this.searchBook()
    })

  }

  searchBook() {
    this.searchService.getSeachBook(this.searchKeyword).subscribe((res) => {
      this.books = res
      console.log(this.books);
    }, (error) => {
      console.log(error); 
      SwalUtils.customMessageError('Error', "Error en la consulta")
    })
  }
}
