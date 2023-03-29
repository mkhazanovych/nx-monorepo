import { Versicherter } from '@drv/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'drv-kunden-profil',
  templateUrl: './kunden-profil.component.html',
  styleUrls: ['./kunden-profil.component.scss'],
})
export class KundenProfilComponent {
  @Input() kunde!: Versicherter
}
