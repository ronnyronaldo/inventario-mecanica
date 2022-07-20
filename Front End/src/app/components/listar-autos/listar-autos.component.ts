import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/models/auto.model';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {
  tutorials?: Auto[];
  currentTutorial?: Auto;
  currentIndex = -1;
  placa = '';

  constructor(private autoService: AutoService) {
   }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.autoService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Auto, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.autoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchPlaca(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;

    this.autoService.findByPlaca(this.placa)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  convertirFechas(datos: Auto[]): Auto [] {
    return datos.map((dato) => {
      // * para corregir descompensacion por cambio de zona horaria
      const fecha = new Date(dato.fecha);
      fecha.setMinutes(fecha.getMinutes() + fecha.getTimezoneOffset());
      return {
        ...dato,
        fecha: fecha,
      };
    });
  }

}
