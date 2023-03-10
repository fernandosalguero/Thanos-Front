import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAltaUsuariosComponent } from './dialog-alta-usuarios.component';

describe('DialogAltaUsuariosComponent', () => {
  let component: DialogAltaUsuariosComponent;
  let fixture: ComponentFixture<DialogAltaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAltaUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAltaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
