import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { LoginInterface } from '../interfaces/login.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUsuario(loginForm: LoginInterface) {
    // console.log('estamos conectados al servicio - login');
    return this.http.post(`${ base_url }/auth/login`, loginForm);
  }
}
