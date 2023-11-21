import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { User } from './user';
import { RegistrarseService } from './registrarse.service';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  registrarseFormulario!:FormGroup
 
  emailControl = new FormControl('', Validators.required)

  constructor(private fb: FormBuilder, 
    private registrarseService: RegistrarseService) {
  }
  

  ngOnInit(){
    this.registrarseFormulario = this.iniciarFormulario()
  }

  iniciarFormulario():FormGroup{
    return this.fb.group({
      name:['',[Validators.required]],
      id:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(5)]],
      role:['user',[Validators.required]],
    })
  }

  nuevoUser: User = new User(); 

  onRegister() {
    console.log('Datos del formulario:', this.registrarseFormulario.value);
    if (this.registrarseFormulario.valid) {
      this.nuevoUser = this.registrarseFormulario.value; // Asigna los valores del formulario al objeto
      this.registrarseService.add(this.nuevoUser).subscribe(
        (response) => {
          console.log('Usuario guardado con éxito:', response);
          this.nuevoUser = new User(); 
          Swal.fire({
            icon: 'success',
            title: 'Se registró con éxito',
            text: 'Disfruta del mejor contenido'
          });
          this.registrarseFormulario.reset();
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
        text: 'Completa los campos!',
        footer: '<a href="">Ayuda?</a>'
      });
    }
  }
  

}
