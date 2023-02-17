import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoreosAnalistasComponent } from './components/monitoreos-analistas/monitoreos-analistas.component';

const routes: Routes = [
  { path: 'monitoreo', component: MonitoreosAnalistasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalistasRoutingModule { }
