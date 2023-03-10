import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AltaUsuarioService } from '../../service/alta-usuario.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogAltaUsuariosComponent } from '../../dialog/dialog-alta-usuarios/dialog-alta-usuarios.component';

@Component({
  selector: 'app-alta-usuarios',
  templateUrl: './alta-usuarios.component.html',
  styleUrls: ['./alta-usuarios.component.css']
})
export class AltaUsuariosComponent {


  

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) {}
  

    openDialog(){
      this.dialog.open(DialogAltaUsuariosComponent, {
        width: '70%'
      });
  
    }



}

