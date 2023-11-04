import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario';
import Swal from 'sweetalert2';
import { RegistrarseService } from './registrarse.service';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  registrarseFormulario!:FormGroup
  usuario: Usuario = new Usuario()

  constructor(private fb: FormBuilder, private registrarseService: RegistrarseService) {
  }
  

  ngOnInit(){
    this.registrarseFormulario = this.iniciarFormulario()
  }

  iniciarFormulario():FormGroup{
    return this.fb.group({
      name:['',[Validators.required]],
      lastname:['',[Validators.required]],
      id:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(5)]],
      role:['user',[Validators.required]],
    })
  }

  onRegister(){
    if(this.registrarseFormulario.valid){
      
      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido a BookTeka!',
        text: 'Gracias por visitar nuestro sitio web.',
        width: 600,
        confirmButtonText: 'Continuar',
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://raw.githubusercontent.com/gist/s-shivangi/7b54ec766cf446cafeb83882b590174d/raw/8957088c2e31dba6d72ce86c615cb3c7bb7f0b0c/nyan-cat.gif")
          left top
          no-repeat
`
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Verifica tu informacion',
        text: 'Algo ha salido mal :(',
        footer: '<a href="">Ayuda?</a>'
      })
    }
    
  }

}
