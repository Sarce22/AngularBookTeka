import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { SwalUtils } from '../utils/swal-utils';
import { ListadoUsersService } from './listado-users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listado-users',
  templateUrl: './listado-users.component.html',
  styleUrls: ['./listado-users.component.css']
})
export class ListadoUsersComponent implements OnInit {

  users!: User[]

  constructor(private listadoUserService: ListadoUsersService){}


  ngOnInit(): void {
    this.getNowUser()
  }


  getNowUser() {
    this.listadoUserService.getNowUsers().subscribe((res) => {
      console.log(res);
      
      if (res) {
        this.users = res
        console.log(this.users);

      } else {
        SwalUtils.customMessageError("Error", "No se encontratron usuarios")
      }
    }, (error) => {
      console.log(error);
      SwalUtils.customMessageError("Error", "Error al consultar los datos")
    })
  }

  eliminarUsuario(user: User) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar al usuario ${user.name} ${user.lastname}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      backdrop: `
            rgba(0,10,123,0.4)
           
`
    }).then((result) => {
      if (result.isConfirmed) {
        this.listadoUserService.deleteUser(user.id).subscribe(
          response => {
            console.log(response); 
            Swal.fire('Usuario eliminado', '', 'success');
            this.getNowUser();
          },
          error => {
            console.error(error); 
            Swal.fire('Error al eliminar el usuario', '', 'error');
          }
        );
      }
    });
  }

  editarUsuario(user: User) {
    Swal.fire({
      title: 'Editar Usuario',
      html: `
      <div>
        <div class="mb-3">
          <label for="name" class="form-label">Nombre:</label>
          <input id="name" class="form-control" value="${user.name}" required>
        </div>

        <div class="mb-3">
          <label for="lastname" class="form-label">Apellido:</label>
          <input id="lastname" class="form-control" value="${user.lastname}" required>
        </div>

        <div class="mb-3">
          <label for="id" class="form-label">ID:</label>
          <input id="id" class="form-control" value="${user.id}" required>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input id="email" class="form-control" value="${user.email}" required>
        </div>
      </div>
      <!-- ... otros campos del formulario ... -->
    `,
      icon: 'info',
      confirmButtonText: 'Guardar',
      showCancelButton: true,
      cancelButtonText: 'Regresar',
      backdrop: `
      rgba(0,10,123,0.4)
     
`
    }).then((result) => {
      if (result.isConfirmed) {
        const name = (<HTMLInputElement>document.getElementById('name')).value;
        const lastname = (<HTMLInputElement>document.getElementById('lastname')).value;
        const id = (<HTMLInputElement>document.getElementById('id')).value;
        const email = (<HTMLInputElement>document.getElementById('email')).value;
  
        // Valida campos si es necesario
  
        user.name = name;
        user.lastname = lastname;
        user.id = Number(id);
        user.email = email;
  
        // Actualiza otros campos del usuario según sea necesario
  
        this.listadoUserService.updateUser(user.id, user).subscribe(
          _ => {
            Swal.fire('Cambios guardados con éxito', 'Usuario fue editado', 'success');
          },
          error => {
            console.error('Error al actualizar el usuario:', error);
            Swal.fire('Error', 'Hubo un problema al actualizar el usuario', 'error');
          }
        );
      }
    });
  }
  
  

  
  


}
