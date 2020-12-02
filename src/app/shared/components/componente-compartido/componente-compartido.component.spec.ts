import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCompartidoComponent } from './componente-compartido.component';

describe('ComponenteCompartidoComponent', () => {
  let component: ComponenteCompartidoComponent;
  let fixture: ComponentFixture<ComponenteCompartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteCompartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCompartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
