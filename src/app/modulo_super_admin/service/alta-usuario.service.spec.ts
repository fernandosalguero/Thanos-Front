import { TestBed } from '@angular/core/testing';

import { AltaUsuarioService } from './alta-usuario.service';

describe('AltaUsuarioService', () => {
  let service: AltaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
