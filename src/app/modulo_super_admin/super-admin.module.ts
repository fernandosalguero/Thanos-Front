import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { AltaUsuariosComponent } from './components/alta-usuarios/alta-usuarios.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { HomeComponentSA } from './components/home/home.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { DashboardSAComponent } from './components/dashboard-sa/dashboard-sa.component';
import { SugerenciasRecibidasComponent } from './components/sugerencias-recibidas/sugerencias-recibidas.component';


@NgModule({
  declarations: [
    AltaUsuariosComponent,
    ListadoUsuariosComponent,
    HomeComponentSA,
    DashboardSAComponent,
    SugerenciasRecibidasComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SuperAdminModule { }