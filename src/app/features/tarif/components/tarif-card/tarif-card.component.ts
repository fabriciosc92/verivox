import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Tarif } from 'src/app/core/interfaces/tarif';

@Component({
  selector: 'app-tarif-card',
  templateUrl: './tarif-card.component.html',
  styleUrls: ['./tarif-card.component.sass'],
})
export class TarifCardComponent implements OnInit {
  @Input() data!: Tarif;
  @Input() index!: number;

  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  faChevronRight = faChevronRight;

  constructor() {}

  ngOnInit(): void {}
}
