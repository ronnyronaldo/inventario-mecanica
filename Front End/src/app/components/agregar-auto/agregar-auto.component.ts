import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/models/auto.model';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-agregar-auto',
  templateUrl: './agregar-auto.component.html',
  styleUrls: ['./agregar-auto.component.css']
})
export class AgregarAutoComponent implements OnInit {
  auto: Auto = {
    placa: '',
    chasis: '',
    kilometraje: '',
    fecha: Date,
    obra: '',
    nombre: '',
    cedula:'',
    celular: '',
    repuestos: '',
  };
  submitted = false;

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
  }

  saveAuto(): void {
    const data = {
      placa: this.auto.placa,
      chasis: this.auto.chasis,
      kilometraje: this.auto.kilometraje,
      fecha: this.auto.fecha,
      obra: this.auto.obra,
      nombre: this.auto.nombre,
      cedula: this.auto.cedula,
      celular: this.auto.celular,
      repuestos: this.auto.repuestos,
    };

    this.autoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAuto(): void {
    this.submitted = false;
    this.auto = {
      placa: '',
      chasis: '',
      kilometraje: '',
      fecha: Date,
      obra: '',
      nombre: '',
      cedula: '',
      celular: '',
      repuestos: '',
    };
  }

}
