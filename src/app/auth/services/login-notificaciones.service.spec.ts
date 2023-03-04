import { TestBed } from '@angular/core/testing';

import { LoginNotificacionesService } from './login-notificaciones.service';

describe('LoginNotificacionesService', () => {
  let service: LoginNotificacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginNotificacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
