import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KundenProfilComponent } from './kunden-profil/kunden-profil.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KundenProfilComponent],
  exports: [KundenProfilComponent],
})
export class SharedUiKundenProfilModule {}
