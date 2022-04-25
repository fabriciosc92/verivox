import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultListRoutingModule } from './result-list-routing.module';
import { ResultListComponent } from './result-list.component';
import { LayoutModule } from 'src/app/features/layout/layout.module';
import { TarifModule } from 'src/app/features/tarif/tarif.module';

@NgModule({
  declarations: [ResultListComponent],
  imports: [CommonModule, ResultListRoutingModule, LayoutModule, TarifModule],
})
export class ResultListModule {}
