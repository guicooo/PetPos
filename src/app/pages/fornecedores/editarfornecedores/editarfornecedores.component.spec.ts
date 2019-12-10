import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarfornecedoresComponent } from './editarfornecedores.component';

describe('EditarfornecedoresComponent', () => {
  let component: EditarfornecedoresComponent;
  let fixture: ComponentFixture<EditarfornecedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarfornecedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarfornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
