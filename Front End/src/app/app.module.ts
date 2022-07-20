import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarAutoComponent } from './components/agregar-auto/agregar-auto.component';
import { EditarAutosComponent } from './components/editar-autos/editar-autos.component';
import { ListarAutosComponent } from './components/listar-autos/listar-autos.component';
//import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    AgregarAutoComponent,
    EditarAutosComponent,
    ListarAutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //InputNumberModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
