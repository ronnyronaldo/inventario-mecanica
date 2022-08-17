import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/models/auto.model';
import { AutoService } from 'src/app/services/auto.service';

// Componentes del modal
import { ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {
  closeResult: string = '';

  autos?: Auto[];
  currentAuto?: Auto;
  currentIndex = -1;
  placa = '';

  constructor(
    private autoService: AutoService,
    private modalService: NgbModal) {
   }

  ngOnInit(): void {
    this.recuperarAutos();
  }

  
  openScrollableContent(longContent: any):void {
    this.modalService.open(longContent, { scrollable: true });
  }

  recuperarAutos(): void {
    this.autoService.getAll()
      .subscribe(
        data => {
          this.autos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refrescarLista(): void {
    this.recuperarAutos();
    this.currentAuto = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Auto, index: number): void {
    this.currentAuto = tutorial;
    this.currentIndex = index;
  }

  borrarAllAutos(): void {
    this.autoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refrescarLista();
        },
        error => {
          console.log(error);
        });
  }

  searchPlaca(): void {
    this.currentAuto = undefined;
    this.currentIndex = -1;

    this.autoService.findByPlaca(this.placa)
      .subscribe(
        data => {
          this.autos = data;
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
