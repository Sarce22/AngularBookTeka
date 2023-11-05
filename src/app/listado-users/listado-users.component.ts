import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ListadoUsersService } from './listado-users.service';
import { SwalUtils } from '../utils/swal-utils';

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
}
