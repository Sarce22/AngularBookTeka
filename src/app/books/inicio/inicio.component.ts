import { Component, OnInit } from '@angular/core';
import { Contants } from 'src/app/constants/constants';
import { Book } from "src/app/books/book";
import { BooksService } from '../books.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{

  imagen1 = 'https://merakilibris.files.wordpress.com/2017/11/add-heding-4.png?w=1200'
  imagen2 = 'https://funhousetoys.com.au/cdn/shop/collections/HarryPotter.png?v=1613178676' 
  imagen3 = 'https://www.todofondos.net/wp-content/uploads/Fondo-de-pantalla-insurgente-1920x1080-Tris-y-cuatro-papel-tapiz-divergente-1024x576.jpg'

  aGoodGirl = 'https://books.google.com/books/publisher/content/images/frontcover/qsudDwAAQBAJ?fife=w480-h690'
  cronicasMuerteAnunciada = 'https://books.google.com/books/publisher/content/images/frontcover/KbsZEAAAQBAJ?fife=w480-h690'
  akelarre = 'https://books.google.com/books/publisher/content/images/frontcover/jOmRDwAAQBAJ?fife=w480-h690'
  relatos = 'https://books.google.com/books/publisher/content/images/frontcover/JUikCwAAQBAJ?fife=w480-h690'
  todoLoQueSomosJuntos = 'https://books.google.com/books/publisher/content/images/frontcover/njmNDwAAQBAJ?fife=w480-h690'
}
