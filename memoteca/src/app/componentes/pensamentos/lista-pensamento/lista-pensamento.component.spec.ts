import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPensamentoComponent } from './lista-pensamento.component';

describe('ListaPensamentoComponent', () => {
  let component: ListaPensamentoComponent;
  let fixture: ComponentFixture<ListaPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
