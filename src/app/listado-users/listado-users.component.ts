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
      cancelButtonText: 'Cancelar'
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

  
  


}
