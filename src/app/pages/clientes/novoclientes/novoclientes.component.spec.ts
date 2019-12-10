import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoclientesComponent } from './novoclientes.component';

describe('NovoclientesComponent', () => {
  let component: NovoclientesComponent;
  let fixture: ComponentFixture<NovoclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
