import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoEditarComponent } from './colecao-editar.component';

describe('ColecaoEditarComponent', () => {
  let component: ColecaoEditarComponent;
  let fixture: ComponentFixture<ColecaoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaoEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColecaoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
