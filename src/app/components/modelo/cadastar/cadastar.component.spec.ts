import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarComponent } from './cadastar.component';

describe('CadastarComponent', () => {
  let component: CadastarComponent;
  let fixture: ComponentFixture<CadastarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
