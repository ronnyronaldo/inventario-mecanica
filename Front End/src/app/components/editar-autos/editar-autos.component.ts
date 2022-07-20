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
  currentTutorial: Auto = {
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
    this.getTutorial(this.route.snapshot.params.id);
  }

  getTutorial(id: string): void {
    this.autoService.get(id)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    this.message = '';

    this.autoService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Los registros fueron actualizados correctamente!';
          //this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.autoService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }
}
