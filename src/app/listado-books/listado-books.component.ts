import { Component, OnInit } from '@angular/core';
import { Book } from './books';

import { SwalUtils } from '../utils/swal-utils';
import { ListadoBooksService } from './listado-books.service';
import Swal from 'sweetalert2';


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


  eliminarUsuario(book: Book) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar al libro ${book.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      backdrop: `
            rgba(0,10,123,0.4)
           
`
    }).then((result) => {
      if (result.isConfirmed) {
        this.listadoBooksService.deleteBook(book.isbn).subscribe(
          response => {
            console.log(response); 
            Swal.fire('Libro eliminado', '', 'success');
            this.getNowBook();
          },
          error => {
            console.error(error); 
            Swal.fire('Error al eliminar el libro', '', 'error');
          }
        );
      }
    });
  }


  editarBook(book: Book) {
    Swal.fire({
      title: 'Editar Book',
      html: `
      <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-4">
              <img src="${book.urlImage}" class="custom-img img-fluid" alt="Imagen del libro">
            </div>
            <div class="col-md-8">
              <div class="mb-3">
                <label for="name" class="form-label" style="font-weight: bold;">Nombre:</label>
                <input id="name" class="form-control" value="${book.name}" required>
              </div>

              <div class="mb-3">
                <label for="isbn" class="form-label" style="font-weight: bold;">ISBN:</label>
                <input id="isbn" class="form-control" value="${book.isbn}" required>
              </div>

              <div class="mb-3">
                <label for="author" class="form-label" style="font-weight: bold;">Autor:</label>
                <input id="author" class="form-control" value="${book.author}" required>
              </div>

              <div class="mb-3">
                <label for="price" class="form-label" style="font-weight: bold;">Precio:</label>
                <input id="price" class="form-control" value="${book.price}" required>
              </div>

              

              <div class="form-group">
                <label for="category" style="font-weight: bold;">Categoría:</label>
                <select class="form-control" id="category" formControlName="category">
                  <option value="${book.category}">${book.category}</option>
                  <option value="Paranormal">Paranormal</option>
                  <option value="Ciencia Ficción">Ciencia Ficción</option>
                  <option value="Poesía">Poesía</option>
                  <option value="Romance">Romance</option>
                  <option value="Acción">Acción</option>
                </select>
              </div><br>

              <div class="mb-3">
                <label for="urlImage" class="form-label" style="font-weight: bold;">URL de la Imagen:</label>
                <input id="urlImage" class="form-control" value="${book.urlImage}" required>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>

    `,
      width: '75%',
      confirmButtonText: 'Guardar',
      showCancelButton: true,
      cancelButtonText: 'Regresar',
      backdrop: `
      rgba(0,10,123,0.4)
     
`
    }).then((result) => {
      if (result.isConfirmed) {
        const name = (<HTMLInputElement>document.getElementById('name')).value;
        const isbn = (<HTMLInputElement>document.getElementById('isbn')).value;
        const author = (<HTMLInputElement>document.getElementById('author')).value;
        const price = (<HTMLInputElement>document.getElementById('price')).value;
       
        const category = (<HTMLInputElement>document.getElementById('category')).value;
        const urlImage = (<HTMLInputElement>document.getElementById('urlImage')).value;
        
  
        // Valida campos si es necesario
  
        book.name = name;
        book.isbn = isbn;
        book.author = author
        book.price = parseInt(price);
        book.urlImage = urlImage;
        book.category = category;
  
        // Actualiza otros campos del usuario según sea necesario
  
        this.listadoBooksService.updateBook( book.isbn,book).subscribe(
          _ => {
            Swal.fire('Cambios guardados con éxito', 'libro fue editado', 'success');
          },
          error => {
            console.error('Error al actualizar el libro:', error);
            Swal.fire('Error', 'Hubo un problema al actualizar el libro', 'error');
          }
        );
      }
    });
  }
}
