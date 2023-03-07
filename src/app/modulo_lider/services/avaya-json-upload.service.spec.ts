import { TestBed } from '@angular/core/testing';

import { AvayaJsonUploadService } from './avaya-json-upload.service';

describe('AvayaJsonUploadService', () => {
  let service: AvayaJsonUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvayaJsonUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
