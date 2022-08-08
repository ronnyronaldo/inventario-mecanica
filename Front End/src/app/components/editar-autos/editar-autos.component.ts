import { Component, OnInit } from '@angular/core';
import { AutoService } from 'src/app/services/auto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from 'src/app/models/auto.model';

@Component({
  selector: 'app-editar-autos',
  templateUrl: './editar-autos.component.html',
  styleUrls: ['./editar-autos.component.css']
})
export class EditarAutosComponent implements OnInit {
  currentAuto: Auto = {
    placa: '',
    chasis:'',
    kilometraje: '',
    fecha: new Date(),
    obra: '',
    nombre: ''
  };
  message = '';
  
  constructor(
    private autoService: AutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAuto(this.route.snapshot.params.id);
  }

  getAuto(id: string): void {
    this.autoService.get(id)
      .subscribe(
        data => {
          this.currentAuto = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAuto(): void {
    this.message = '';

    this.autoService.update(this.currentAuto.id, this.currentAuto)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Los registros fueron actualizados correctamente!';
          //this.router.navigate(['/Autos']);
        },
        error => {
          console.log(error);
        });
  }

  deleteAuto(): void {
    this.autoService.delete(this.currentAuto.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/autos']);
        },
        error => {
          console.log(error);
        });
  }
}
