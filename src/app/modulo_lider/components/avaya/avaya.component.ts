import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import *  as XLSX from 'xlsx'
import { AvayaJsonUploadService } from '../../services/avaya-json-upload.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-avaya',
  templateUrl: './avaya.component.html',
  styleUrls: ['./avaya.component.css']
})
export class AvayaComponent {

  convertJson!: any;

  constructor(private avayaUpload: AvayaJsonUploadService,
    private toast: ToastrService,
    private formBuilder: FormBuilder,) { }


  fileUpload(event: any) {
    // console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      // console.log(event);
      let binaryData = event.target?.result;
      let workbook = XLSX.read(binaryData, { type: 'binary' });
      workbook.SheetNames.forEach(sheet => {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
        console.log('CONSOL DE DATA', data);
        this.convertJson = JSON.stringify(data, undefined, 4)
      })

      this.avayaUpload.uploadJson(this.convertJson).subscribe(resp => {
        console.warn('enviamos al servidor', resp);
      }, (err) => this.toast.error(`${err}`, 'Thanos'))
    }
  }
}



