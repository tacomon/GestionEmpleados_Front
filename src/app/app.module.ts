import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarEmpleadoComponent,
    ListarEmpleadosComponent,
    HeaderComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
