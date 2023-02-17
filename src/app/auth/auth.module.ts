import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// MODULOS
import { AuthRoutingModule } from './auth-routing.module';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';

// COMPONENTES
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LoginComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
