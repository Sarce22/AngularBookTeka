import { Component, OnInit } from '@angular/core';
import { Book } from './books';
import { ListadoBooksService } from './listado-books.service';
import { SwalUtils } from '../utils/swal-utils';


@Component({
  selector: 'app-listado-books',
  templateUrl: './listado-books.component.html',
  styleUrls: ['./listado-books.component.css']
})
export class ListadoBooksComponent implements OnInit{


  books!: Book[]

  constructor(private listadoBooksService: ListadoBooksService){}


  ngOnInit(): void {
    this.getNowBook()
  }


  getNowBook() {
    this.listadoBooksService.getNowBooks().subscribe((res) => {
      console.log(res);
      
      if (res) {
        this.books = res
        console.log(this.books);

      } else {
        SwalUtils.customMessageError("Error", "No se encontratron usuarios")
      }
    }, (error) => {
      console.log(error);
      SwalUtils.customMessageError("Error", "Error al consultar los datos")
    })
  }
}
