import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Versicherter } from '@drv/shared/types';


@Injectable({
  providedIn: 'root'
})
export class StammdatenService {

  // Stammdaten
  private versicherte: Versicherter[] = [
    { vorname: 'Peter', nachname: 'Meier', id: '111-45' },
    { vorname: 'Lisa', nachname: 'Müller', id: '222-89' },
    { vorname: 'Max', nachname: 'Muster', id: '333-12' },
  ];
  kunde = new BehaviorSubject<Versicherter | null>(null);

  constructor() {;}

  // Backend Request
  getVersicherte(): Promise<Versicherter[]> {
    return new Promise((resolve) => {
      resolve(this.versicherte);
    })
  }
  getKunde(id: string): Versicherter | null {
    return this.versicherte.find(v => v.id === id) || null
  }
  // Streamen den ausgewählten Versicherten an alle interessierten Subscriber
  setKunde(id: string) {
    const selected = this.versicherte.find(v => v.id === id);
    if (selected) {
      this.kunde.next(selected);
    }
  }
}
