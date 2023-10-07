import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  url = 'https://static.vecteezy.com/system/resources/thumbnails/011/515/023/small_2x/judicial-quill-writing-on-open-book-judgment-certificate-or-police-document-education-book-quill-template-design-free-vector.jpg'

  constructor(private router:Router) {

  }
  searchAction(searchText:any) {
    console.log(searchText);
    this.router.navigate(["/dashboard/search/searching", searchText]);
  }
}

