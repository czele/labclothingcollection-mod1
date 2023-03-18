import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCadastrarComponent } from './modelo-cadastrar.component';

describe('ModeloCadastrarComponent', () => {
  let component: ModeloCadastrarComponent;
  let fixture: ComponentFixture<ModeloCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
