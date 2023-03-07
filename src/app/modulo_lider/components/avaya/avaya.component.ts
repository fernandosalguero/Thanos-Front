import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import *  as XLSX from 'xlsx'
import { AvayaJsonUploadService } from '../../services/avaya-json-upload.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Papa } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

const base_url = environment.base_url;
@Component({
  selector: 'app-avaya',
  templateUrl: './avaya.component.html',
  styleUrls: ['./avaya.component.css']
})

export class AvayaComponent {
  fileToUpload!: File;
  successMessage!: string;
  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private avayaUpload: AvayaJsonUploadService,
    private toast: ToastrService,
    private papa: Papa,
    private http: HttpClient,
    ){ }

    onFileSelected(event: any): void {
      const file = event.target.files[0];
      this.fileToUpload = file;
    }


  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    this.http.post<any>('http://localhost:3000/times', formData).subscribe(
      (res) => {
        console.log(res);
        this.successMessage = 'Archivo subido exitosamente';
        this.errorMessage;
      },
      (error) => {
        console.log(error);
        this.successMessage;
        this.errorMessage = 'Ocurrió un error al subir el archivo';
        console.log(this.errorMessage);
        
      }
    );
  }
  }


