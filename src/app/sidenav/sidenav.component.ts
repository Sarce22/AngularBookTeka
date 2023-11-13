import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

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
