import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  registrarseFormulario!:FormGroup
  usuario: Usuario = new Usuario()

  constructor(private fb: FormBuilder){
    
  }

  ngOnInit(){
    this.registrarseFormulario = this.iniciarFormulario()
  }

  iniciarFormulario():FormGroup{
    return this.fb.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(5)]]
    })
  }

  onRegister(){
    if(this.registrarseFormulario.valid){
      
      Swal.fire({
        icon:'success',
        title:'Tu cuenta ha sido creada con exito',
        text:'Disfruta del mejor contenido'
      })

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...Verifica tu informacion',
        text: 'Something went wrong!',
        footer: '<a href="">Ayuda?</a>'
      })
    }
    
  }

}
