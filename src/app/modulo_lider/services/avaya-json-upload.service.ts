import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AvayaJsonUploadService {

  constructor(private httpClient: HttpClient) { }

  uploadJson(convertJson: any){
    console.warn('desde el servicio',  convertJson);
    return this.httpClient.post(`${ base_url }/times`, convertJson);
  }
}

