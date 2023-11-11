import { Component, OnInit } from '@angular/core';
import { Book } from "src/app/books/book";
import { BooksService } from '../books.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  imagen1 = 'https://merakilibris.files.wordpress.com/2017/11/add-heding-4.png?w=1200'
  imagen2 = 'https://funhousetoys.com.au/cdn/shop/collections/HarryPotter.png?v=1613178676' 
  imagen3 = 'https://www.todofondos.net/wp-content/uploads/Fondo-de-pantalla-insurgente-1920x1080-Tris-y-cuatro-papel-tapiz-divergente-1024x576.jpg'

  books!: Book[]

  constructor(private booksService: BooksService){}

  ngOnInit(): void {
    this.getNowPlaying()
  }

  getNowPlaying() {
    this.booksService.getNowPlaying().subscribe((res) => {
      console.log(res);
      
      if (res) {
        this.books = res
        console.log(this.books);

      } else {
        SwalUtils.customMessageError("Error", "No se encontratron libros")
      }
    }, (error) => {
      console.log(error);
      SwalUtils.customMessageError("Error", "Error al consultar los datos")
    })
  }
}
