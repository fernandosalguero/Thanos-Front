import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http'
import { AltaUsuario } from '../interfaces/alta-usuario';
import { Observable } from 'rxjs'

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AltaUsuarioService {

  constructor(private httpClient: HttpClient) { }

  altaAgente(frmAltaAgente: any) {
    return this.httpClient.post(`${ base_url}/auth/register`, frmAltaAgente);
  }



} 


