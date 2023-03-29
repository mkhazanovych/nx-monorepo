import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  kundenID = '';
  versicherte!: Versicherter[];
  stammdatenSubscription!: Subscription;

  constructor(private stammdaten: StammdatenService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      if (params['id']) {
        this.kundenID = params['id']
      }
    });
    this.stammdaten.getVersicherte().then((versicherte) => {
      this.versicherte = versicherte;
    });
    this.stammdatenSubscription = this.stammdaten.kunde.subscribe((knd: Versicherter | null) => {
      if (knd) {
        this.kunde = knd;
      }
    })
  }
  setKunde(event: string) {
    this.stammdaten.setKunde(event);
  }
  ngOnDestroy(): void {
   this.stammdatenSubscription.unsubscribe();
  }
}
