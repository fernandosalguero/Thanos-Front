import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginNotificacionesService {

  constructor() { }

  bienvenidoSuperAdmin(){ 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
   }
  bienvenidoAgente(){  }
  bienvenidoAnalista(){  }
  bienvenidoLider(){  }
  error(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }

}
