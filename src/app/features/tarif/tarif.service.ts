import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarif } from 'src/app/core/interfaces/tarif';
import tarifsMock from './mocks/tarifs.json';

@Injectable({
  providedIn: 'root',
})
export class TarifService {
  constructor() {}

  public getTarifs(): Observable<Tarif[]> {
    const response = tarifsMock;

    const obs = new Observable<Tarif[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next(response);
        subscriber.complete();
      }, 3000);
    });

    return obs;
  }
}
