import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloEditarComponent } from './modelo-editar.component';

describe('ModeloEditarComponent', () => {
  let component: ModeloEditarComponent;
  let fixture: ComponentFixture<ModeloEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
