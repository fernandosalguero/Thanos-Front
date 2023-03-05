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
      dni: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  //  boton de ingreso //TODO funcion de login y redireccionamiento segun rol
  login() {
    // console.log('Tomamos los datos del formulario', this.loginForm.value);
    this.loginService.loginUsuario(this.loginForm.value)
    .subscribe(resp => {
      console.log(resp);

      // almacenamos en el local Storage el roll del usuario para proteger las rutas
      this.dataHttp = resp;
      localStorage.setItem('rol', this.dataHttp.user.rol)

      // redireccionamos al modulo correspondiente segun el rol del usuario
      if (this.dataHttp.user.rol === "superAdminThanos") {
        this.router.navigate(['/sa/dashboard'])
         this.swal.bienvenidoSuperAdmin()
      }  else if (this.dataHttp.user.rol === "agente"){
        this.router.navigate(['/agente'])
        this.swal.bienvenidoAgente()
      } else if ( this.dataHttp.user.rol === "analista"){
        this.router.navigate(['/analistas/monitoreo'])
        this.swal.bienvenidoAnalista()
      } else if ( this.dataHttp.user.rol === "lider"){
        this.router.navigate(['/lider/dashboard'])
        this.swal.bienvenidoLider()
      } else if ( this.dataHttp.user.rol === "bo"){
        this.router.navigate(['/bo'])
        this.swal.bienvenidoBO()
      } else if ( this.dataHttp.user.rol === "jefe"){
        this.router.navigate(['/jefe'])
        this.swal.bienvenidoJefe()
      }

    }, (err) => {
      console.log('mensaje de error del error', err.error.message);
      Swal.fire('Error', err.error.message, 'error');
      
    })
  }


}


