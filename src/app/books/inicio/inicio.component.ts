import { Component, OnInit } from '@angular/core';
import { Book } from "src/app/books/book";
import { BooksService } from '../books.service';
import { SwalUtils } from 'src/app/utils/swal-utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  imagen1 = 'https://i.pinimg.com/564x/2d/9c/d6/2d9cd6c3f43978cb94bca9b42ffa6fcd.jpg'
  imagen2 = 'https://i.pinimg.com/564x/9a/62/59/9a62594579e4557a6646fe152c0eb7da.jpg' 
  imagen3 = 'https://i.pinimg.com/564x/01/78/2e/01782e1e294fe2dd1f64753d6725bde7.jpg'
  books!: Book[]
  selectedCategory: string = '';
  noBooksMessage: string = '';

  constructor(private booksService: BooksService){}

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    if (this.selectedCategory) {
      this.booksService.getBooksByCategory(this.selectedCategory).subscribe(
        (res) => {
          if (res) {
            this.books = res;
            this.noBooksMessage = this.books.length === 0 ? 'No hay libros de esta categoría.' : '';
          } else {
            this.books = [];
            this.noBooksMessage = 'No se encontraron libros para esta categoría';
          }
        },
        (error) => {
          console.error(error);
          SwalUtils.customMessageError("Error", "Error al consultar los datos por categoría");
        }
      );
    } else {
      this.booksService.getNowPlaying().subscribe(
        (res) => {
          if (res) {
            this.books = res;
          } else {
            this.books = [];
            SwalUtils.customMessageError("Error", "No se encontraron libros");
          }
          this.noBooksMessage = '';
        },
        (error) => {
          console.error(error);
          SwalUtils.customMessageError("Error", "Error al consultar los datos");
        }
      );
    }
  }


  filterBooksByCategory() {
    this.getBooks(); 
  }

 


  verLibro(book: Book) {
    Swal.fire({
      
      html: `
      <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Div de la izquierda con la imagen -->
      <div class="card">
        <div class="card-body">
          <img src="${book.urlImage}" class="custom-img img-fluid rounded" alt="Imagen del libro" style="max-height: 600px; object-fit: cover;">
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <!-- Div de la derecha con el nombre, descripción y precio -->
      <div class="card">
        <div class="card-body">
          <div class="mb-3">
            <h3 style="color: #3498db; font-family: 'Arial', sans-serif;">${book.name}</h3>
          </div>

          <div class="mb-3">
            <p id="description" style="font-size: 16px; color: #555;">${book.description}</p>
          </div>

          <div class="mb-3">
            <p id="price" style="font-size: 18px; color: #27ae60; font-weight: bold;">${book.price}</p>
          </div>

          <div class="mb-3">
            <button class="btn btn-primary" ">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    `,
      width: '65%',
      showCloseButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
      showConfirmButton: false,
      showCancelButton: false,
      cancelButtonText: 'Regresar',
      backdrop: `
      rgba(0,10,123,0.4)
     
`
    }).then((result) => {
      if (result.isConfirmed) {
        const name = (<HTMLInputElement>document.getElementById('name')).value;
        const isbn = (<HTMLInputElement>document.getElementById('isbn')).value;
        const price = (<HTMLInputElement>document.getElementById('price')).value;
        const description = (<HTMLInputElement>document.getElementById('description')).value;
        const category = (<HTMLInputElement>document.getElementById('category')).value;
        const urlImage = (<HTMLInputElement>document.getElementById('urlImage')).value;
        
  
        // Valida campos si es necesario
  
        book.name = name;
        book.isbn = isbn;
        
        book.price = parseInt(price);
        book.urlImage = urlImage;
        book.category = category;
  
        // Actualiza otros campos del usuario según sea necesario
  
       
      }
    });
  }
}
