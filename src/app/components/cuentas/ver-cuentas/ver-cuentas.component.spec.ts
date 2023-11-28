import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCuentasComponent } from './ver-cuentas.component';

describe('VerCuentasComponent', () => {
  let component: VerCuentasComponent;
  let fixture: ComponentFixture<VerCuentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCuentasComponent]
    });
    fixture = TestBed.createComponent(VerCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
