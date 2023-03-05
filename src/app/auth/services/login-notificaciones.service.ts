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
      title: 'Hola Super Admin!',
      showConfirmButton: false,
      timer: 1500
    })
   }
  bienvenidoAgente(){ 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Hola Agente',
      showConfirmButton: false,
      timer: 1500
    })
   }
  bienvenidoAnalista(){ 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Hola Analista',
      showConfirmButton: false,
      timer: 1500
    })
   }
  bienvenidoLider(){ 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Hola Lider',
      showConfirmButton: false,
      timer: 1500
    })
   }
  bienvenidoBO(){ 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Hola BO',
      showConfirmButton: false,
      timer: 1500
    })
   }
  bienvenidoJefe(){ 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Hola Jefe',
      showConfirmButton: false,
      timer: 1500
    })
   }
  error(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }

}
