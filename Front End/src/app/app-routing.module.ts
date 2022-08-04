import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAutosComponent } from './components/listar-autos/listar-autos.component';
import { EditarAutosComponent } from './components/editar-autos/editar-autos.component';
import { AgregarAutoComponent } from './components/agregar-auto/agregar-auto.component';

const routes: Routes = [
  { path: '', redirectTo: 'autos', pathMatch: 'full' },
  { path: 'autos', component: ListarAutosComponent },
  { path: 'autos/:id', component: EditarAutosComponent },
  { path: 'agregar', component: AgregarAutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
