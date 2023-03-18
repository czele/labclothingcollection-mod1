import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoCadastrarComponent } from './colecao-cadastrar.component';

describe('ColecaoCadastrarComponent', () => {
  let component: ColecaoCadastrarComponent;
  let fixture: ComponentFixture<ColecaoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaoCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColecaoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
