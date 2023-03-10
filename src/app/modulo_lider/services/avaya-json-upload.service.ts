import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { ToastrService } from 'ngx-toastr';


const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class AvayaJsonUploadService {

  constructor(
    private http: HttpClient,
    private toast: ToastrService
  ) { }


  processCsv(file: File | undefined): void {
    if (file) {
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
  
      reader.onload = (event: any) => {
        const csv: string = event.target.result;
        const rows: string[] = csv.split('\n');
        const headers: string[] = rows[0].split(',');
        const json: any[] = [];
  
        for (let i = 1; i < rows.length; i++) {
          const obj: any = {};
          const row: string[] = rows[i].split(',');
  
          for (let j = 0; j < headers.length; j++) {
            obj[this.processHeader(headers[j])] = row[j];
          }
  
          json.push(obj);
        }
  
        // console.log(json);
  
        // Enviar los datos al backend
        this.http.post(`${ base_url }/times`, json).subscribe(
          (response) => {
            this.toast.success(`Datos guardados correctamente`, '¡Genial!')
            // console.log('Datos enviados al backend');
          },
          (error) => {
            this.toast.error(error.error.message, '¡Upsss!')
            // console.error('Error al enviar datos al backend', error);
          }
        );
      };
    }
  }

  private processHeader(header: string): string {
    return header.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  }




}
