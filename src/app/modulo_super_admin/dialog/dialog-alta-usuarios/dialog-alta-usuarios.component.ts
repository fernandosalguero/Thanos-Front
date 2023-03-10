import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AltaUsuarioService } from '../../service/alta-usuario.service';

@Component({
  selector: 'app-dialog-alta-usuarios',
  templateUrl: './dialog-alta-usuarios.component.html',
  styleUrls: ['./dialog-alta-usuarios.component.css']
})
export class DialogAltaUsuariosComponent {
  frmAltaAgente = this.formBuilder.group({
    dni: ['', Validators.required],
    password: ['', Validators.required],
    rol: ['', Validators.required],
    lider: [''],
    jefe: ['', Validators.required],
    avayaid: ['', Validators.required]
  })

constructor(
  private formBuilder: FormBuilder,
  private altaService: AltaUsuarioService,
  private dialogRef: MatDialogRef<DialogAltaUsuariosComponent>,
){}

  onSubmit(){
    const file = this.frmAltaAgente.value
    this.altaService.altaAgente(file)
    this.frmAltaAgente.reset();
    this.dialogRef.close()
  }
}
