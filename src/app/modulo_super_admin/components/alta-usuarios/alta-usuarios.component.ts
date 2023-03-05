import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AltaUsuarioService } from '../../service/alta-usuario.service';


@Component({
  selector: 'app-alta-usuarios',
  templateUrl: './alta-usuarios.component.html',
  styleUrls: ['./alta-usuarios.component.css']
})
export class AltaUsuariosComponent {

  frmAltaAgente = this.formBuilder.group({
    dni: ['', Validators.required],
    password: ['', Validators.required],
    rol: ['', Validators.required],
    lider: [''],
    jefe: ['', Validators.required],
  })
  

  constructor(
    private formBuilder: FormBuilder,
    private altaService: AltaUsuarioService,
    private router: Router,
    private toast: ToastrService

  ) {}

  onSubmit(){
    console.log('BOTON ON SUBMIT DE ALTA USUARIOS',this.frmAltaAgente.value); 
    this.altaService.altaAgente(this.frmAltaAgente.value)
    .subscribe( resp => {
      console.log('RESPUESTA DEL SERVIDOR', resp);
    }, (err) => this.toast.error(`${err}`, 'Thanos'))    
  }

}

