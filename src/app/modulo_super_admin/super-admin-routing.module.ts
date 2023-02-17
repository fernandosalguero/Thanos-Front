import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaUsuariosComponent } from './components/alta-usuarios/alta-usuarios.component';
import { DashboardSAComponent } from './components/dashboard-sa/dashboard-sa.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { SugerenciasRecibidasComponent } from './components/sugerencias-recibidas/sugerencias-recibidas.component';

const routes: Routes = [
  { path: 'altausuario', component: AltaUsuariosComponent},
  { path: 'listadousuario', component: ListadoUsuariosComponent},
  { path: 'dashboard', component: DashboardSAComponent},
  { path: 'sugerencias', component: SugerenciasRecibidasComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
