import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';
import * as Papa from 'papaparse';



@Injectable({
  providedIn: 'root'
})
export class AvayaJsonUploadService {
  private base_url = 'http://localhost:3000/times';

  constructor(
    private http: HttpClient,
    ) { }



  uploadJson(file: FormData) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<any>(this.base_url, file, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.message || 'Server error');
      })
    );
  }
}

