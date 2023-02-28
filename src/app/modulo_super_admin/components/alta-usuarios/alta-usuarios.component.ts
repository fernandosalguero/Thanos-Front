import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    lider: ['', Validators.required],
    jefe: ['', Validators.required],
  })


  constructor(
    private formBuilder: FormBuilder,
    private altaService: AltaUsuarioService,
    private router: Router,
  ) {}

  onSubmit(){
    console.log(this.frmAltaAgente.value); 

    this.altaService.altaAgente(this.frmAltaAgente.value)
    .subscribe( resp => {
      // console.log(this.frmAltaAgente.value);        
      console.log('usuario creado')
      console.log(resp);
    }, (err) => console.warn(err) )


    //redireccionamos al login
    this.router.navigate(['/auth/login'])

    
  }

}
