import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoListarComponent } from './colecao-listar.component';

describe('ColecaoListarComponent', () => {
  let component: ColecaoListarComponent;
  let fixture: ComponentFixture<ColecaoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaoListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColecaoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
