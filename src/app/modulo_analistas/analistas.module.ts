import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalistasRoutingModule } from './analistas-routing.module';
import { HomeAnalistasComponent } from './components/home-analistas/home-analistas.component';
import { MonitoreosAnalistasComponent } from './components/monitoreos-analistas/monitoreos-analistas.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    HomeAnalistasComponent,
    MonitoreosAnalistasComponent
  ],
  imports: [
    CommonModule,
    AnalistasRoutingModule,
    AngularMaterialModule
  ]
})
export class AnalistasModule { }
