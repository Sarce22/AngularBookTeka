import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/books/book';
import { Contants } from 'src/app/constants/constants';
import { SearchService } from '../search.service';
import { SwalUtils } from 'src/app/utils/swal-utils';
import Swal from 'sweetalert2';

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
