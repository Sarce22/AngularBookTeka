import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Book } from './books';
import Swal from 'sweetalert2';
import { RegistrarBooksService } from './registrar-books.service';

@Component({
  selector: 'app-registrar-books',
  templateUrl: './registrar-books.component.html',
  styleUrls: ['./registrar-books.component.css']
})
export class RegistrarBooksComponent {

  registrarseFormulario!:FormGroup
 

  constructor(private fb: FormBuilder, 
    private registrarbooksService: RegistrarBooksService) {
  }
  

  ngOnInit(){
    this.registrarseFormulario = this.iniciarFormulario()
  }

  iniciarFormulario():FormGroup{
    return this.fb.group({
      name:['',[Validators.required]],
      isbn:['',[Validators.required]],
      price:['',[Validators.required]],
      description: ['', [Validators.required]],
      urlImage: ['', [Validators.required,Validators.minLength(5)]],
      category: ['', [Validators.required]]
      
    })
  }

  nuevoBook: Book = new Book(); 

  onRegister() {
    console.log('Datos del formulario:', this.registrarseFormulario.value);
    if (this.registrarseFormulario.valid) {
      this.nuevoBook = this.registrarseFormulario.value; // Asigna los valores del formulario al objeto
      this.registrarbooksService.add(this.nuevoBook).subscribe(
        (response) => {
          console.log('Usuario guardado con éxito:', response);
          this.nuevoBook = new Book(); 
          Swal.fire({
            icon: 'success',
            title: 'Se registró con éxito',
            text: 'Disfruta del mejor contenido'
          });
        },
        (error) => {
          console.error('Error al guardar el usuario:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error al guardar el usuario',
            text: 'Por favor, verifica la información'
          });
        }
      );
    } else {
      console.log('Verifica tu información antes de registrar.');
      Swal.fire({
        icon: 'error',
        title: 'Oops... Completa todos los campos',
        text: 'Llena la información!',
        footer: '<a href="">Ayuda?</a>'
      });
    }
  }
}
