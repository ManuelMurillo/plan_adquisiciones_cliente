import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePruebaDosComponent } from './componente-prueba-dos.component';

describe('ComponentePruebaDosComponent', () => {
  let component: ComponentePruebaDosComponent;
  let fixture: ComponentFixture<ComponentePruebaDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePruebaDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePruebaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
