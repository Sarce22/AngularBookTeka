import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { Contants } from '../constants/constants';
import { MainService } from './main.service';
import { SwalUtils } from '../utils/swal-utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  books!: Book[];
  baseImageUrl = Contants.URL_BACKDROP_SIZE_W300

  constructor(private mainService: MainService){

  }

  ngOnInit(): void {
    this.getNowPlaying()
  }

  getNowPlaying() {
    this.mainService.getNowPlaying().subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.books = res.results
        console.log(this.books);  
      } else {
        SwalUtils.customMessageError("Error", "No se encontratron datos")
      }
      

    }, (error: any) => {
      console.log(error);

      SwalUtils.customMessageError("Error", "Error al consultar los datos")
    })
  }
}
