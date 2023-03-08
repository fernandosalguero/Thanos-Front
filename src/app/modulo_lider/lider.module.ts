import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiderRoutingModule } from './lider-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { MonitoreoComponent } from './components/monitoreo/monitoreo.component';
import { AvayaComponent } from './components/avaya/avaya.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CasosMalDerivadosLiderComponent } from './components/casos-mal-derivados-lider/casos-mal-derivados-lider.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    EquipoComponent,
    MonitoreoComponent,
    AvayaComponent,
    ContactoComponent,
    CasosMalDerivadosLiderComponent
  ],
  imports: [
    CommonModule,
    LiderRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LiderModule { }
