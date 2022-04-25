import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarif } from 'src/app/core/interfaces/tarif';
import { TarifService } from '../../tarif.service';

@Component({
  selector: 'app-tarif-cards-list',
  templateUrl: './tarif-cards-list.component.html',
  styleUrls: ['./tarif-cards-list.component.sass'],
})
export class TarifCardsListComponent implements OnInit {
  tarifs$!: Observable<Tarif[]>;

  constructor(private tarifService: TarifService) {}

  ngOnInit(): void {
    this.tarifs$ = this.tarifService.getTarifs();
  }
}
