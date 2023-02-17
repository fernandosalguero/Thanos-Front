import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvayaComponent } from './components/avaya/avaya.component';
import { CasosMalDerivadosLiderComponent } from './components/casos-mal-derivados-lider/casos-mal-derivados-lider.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { MonitoreoComponent } from './components/monitoreo/monitoreo.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'equipo', component: EquipoComponent},
    { path: 'monitoreo', component: MonitoreoComponent},
    { path: 'avaya', component: AvayaComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'casosMalDerivados', component: CasosMalDerivadosLiderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiderRoutingModule { }
