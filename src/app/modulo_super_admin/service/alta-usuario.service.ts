import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AltaUsuarioService {

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
  ) { }

  altaAgente(frmAltaAgente: any) { //TODO: Hay que ver la respuesta sel servidor para identificar porque no me muestra el mensaje de error
    this.httpClient.post(`${base_url}/auth/register`, frmAltaAgente).subscribe(
      (data) => {
        console.log('DATA', data);
        this.toastr.success('Registro exitoso', 'Éxito');
      },
      (error) => {
        console.error(error.message, error);
      }
    );
  }


}


