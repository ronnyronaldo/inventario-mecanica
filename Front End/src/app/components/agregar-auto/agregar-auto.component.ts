import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/models/auto.model';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-agregar-auto',
  templateUrl: './agregar-auto.component.html',
  styleUrls: ['./agregar-auto.component.css']
})
export class AgregarAutoComponent implements OnInit {
  tutorial: Auto = {
    placa: '',
    chasis: '',
    kilometraje: '',
    fecha: Date,
    obra: '',
    nombre: '',
  };
  submitted = false;

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      placa: this.tutorial.placa,
      chasis: this.tutorial.chasis,
      kilometraje: this.tutorial.kilometraje,
      fecha: this.tutorial.fecha,
      obra: this.tutorial.obra,
      nombre: this.tutorial.nombre,
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

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      placa: '',
      chasis: '',
      kilometraje: '',
      fecha: Date,
      obra: '',
      nombre: '',
    };
  }

}
