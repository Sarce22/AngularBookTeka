import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';
import { SwalUtils } from '../utils/swal-utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  url = 'https://static.vecteezy.com/system/resources/thumbnails/011/515/023/small_2x/judicial-quill-writing-on-open-book-judgment-certificate-or-police-document-education-book-quill-template-design-free-vector.jpg'
  
  loginForm!: FormGroup
  login: Login = new Login
  

  constructor(private fb: FormBuilder,
    private router:Router,
    private loginService: LoginService) {

  }

  ngOnInit() {
    sessionStorage.clear()
    this.loginForm = this.iniciarFormulario()
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      email: ['sebas@admin.com', [Validators.required]],
      password: ['admin', [Validators.required,Validators.minLength(5)]]
    })
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.extractData()
      this.loginService.login(this.login).subscribe((res) => {
        console.log(res);
        sessionStorage.setItem('user', JSON.stringify(res.data.user))
        sessionStorage.setItem('token', res.data.token)
        this.router.navigateByUrl('dashboard') 
        Swal.fire({
          icon:'success',
          title: '¡Bienvenido a BookTeka!',
          text: 'Gracias por visitar nuestro sitio web.',
          width: 600,
          confirmButtonText: 'Aceptar',
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
        
      }, (error) => {
        
        SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
        console.log(error);
        
      })      
    } else {
      SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
    }
    console.log(this.loginForm);
    
  }

  extractData() {
    this.login.email = this.loginForm.value.email
    this.login.password = this.loginForm.value.password
  }
}
