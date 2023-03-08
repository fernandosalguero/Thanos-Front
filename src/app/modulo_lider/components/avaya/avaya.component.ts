import { Component } from '@angular/core';
import { AvayaJsonUploadService } from '../../services/avaya-json-upload.service';


@Component({
  selector: 'app-avaya',
  templateUrl: './avaya.component.html',
  styleUrls: ['./avaya.component.css']
})

export class AvayaComponent {

  constructor(
    private avayaService: AvayaJsonUploadService,

  ) { }

  onFileSelected(eventTarget: EventTarget | null): void {
    if (eventTarget instanceof HTMLInputElement) {
      const file = eventTarget.files?.[0];
      this.avayaService.processCsv(file);
    }
  }

}


