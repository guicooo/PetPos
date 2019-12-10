import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovofornecedoresComponent } from './novofornecedores.component';

describe('NovofornecedoresComponent', () => {
  let component: NovofornecedoresComponent;
  let fixture: ComponentFixture<NovofornecedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovofornecedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovofornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
