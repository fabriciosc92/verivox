import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarifCardComponent } from './components/tarif-card/tarif-card.component';
import { TarifCardsListComponent } from './components/tarif-cards-list/tarif-cards-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TarifCardComponent, TarifCardsListComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TarifCardComponent, TarifCardsListComponent],
})
export class TarifModule {}
