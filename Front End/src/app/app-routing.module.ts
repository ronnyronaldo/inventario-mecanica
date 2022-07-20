import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAutosComponent } from './components/listar-autos/listar-autos.component';
import { EditarAutosComponent } from './components/editar-autos/editar-autos.component';
import { AgregarAutoComponent } from './components/agregar-auto/agregar-auto.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: ListarAutosComponent },
  { path: 'tutorials/:id', component: EditarAutosComponent },
  { path: 'add', component: AgregarAutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
