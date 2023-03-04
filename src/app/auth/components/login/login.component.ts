import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginNotificacionesService } from '../../services/login-notificaciones.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dataHttp: any;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private swal: LoginNotificacionesService) {


    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  //  boton de ingreso //TODO funcion de login y redireccionamiento segun rol
  login() {
    console.log('Tomamos los datos del formulario', this.loginForm.value);
    this.loginService.loginUsuario(this.loginForm.value)
    .subscribe(resp => {
      console.log(resp);
    }, (err) => {
      console.log('mensaje de error del error', err.error.message);
      Swal.fire('Error', err.error.message, 'error');
      
    })
  }


}


