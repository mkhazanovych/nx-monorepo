import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Versicherter } from '@drv/shared/types';
import { StammdatenService } from '@drv/shared/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'drv-remote-entry',
  templateUrl: './remote-entry.component.html',
  styleUrls: ['./remote-entry.component.scss'],
})
export class RemoteEntryComponent implements OnInit, OnDestroy {
  kunde!: Versicherter;
  versicherte!: Versicherter[];
  stammdatenSubscription!: Subscription;

  constructor(private stammdaten: StammdatenService, private router: Router) {}

  ngOnInit(): void {
    this.stammdaten.getVersicherte().then((versicherte) => {
      this.versicherte = versicherte;
    });
    this.stammdatenSubscription = this.stammdaten.kunde.subscribe((knd: Versicherter | null) => {
      if (knd) {
        this.kunde = knd;
      }
    })
  }
  setKunde(id: string) {
    this.stammdaten.setKunde(id);
  }
  goToRemote2(id: string) {
    this.router.navigate(
      ['/remote2'],
      { queryParams: { id } }
    );
  }
  ngOnDestroy(): void {
   this.stammdatenSubscription.unsubscribe();
  }
}
