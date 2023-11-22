import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  img = 'https://raw.githubusercontent.com/gist/s-shivangi/7b54ec766cf446cafeb83882b590174d/raw/8957088c2e31dba6d72ce86c615cb3c7bb7f0b0c/nyan-cat.gif'
  isAdmin = false;
  ngOnInit(): void {
    console.log('Entrando');

    this.validateUser()
  }


  validateUser() {
    const user = JSON.parse(sessionStorage.getItem('user')!)
    console.log(user);

    if (user) {
      if (user.role == 'admin') {
        this.isAdmin = true
      } else {
        this.isAdmin = false
      }
    }
  }

}
