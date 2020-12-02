import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPeliculaComponent } from './form-pelicula.component';

describe('FormPeliculaComponent', () => {
  let component: FormPeliculaComponent;
  let fixture: ComponentFixture<FormPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
