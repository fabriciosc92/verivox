import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifCardsListComponent } from './tarif-cards-list.component';

describe('TarifCardsListComponent', () => {
  let component: TarifCardsListComponent;
  let fixture: ComponentFixture<TarifCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
