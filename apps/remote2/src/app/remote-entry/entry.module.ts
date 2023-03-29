import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './remote-entry.component';
import { remoteRoutes } from './entry.routes';
import { SharedUiKundensucheModule } from '@drv/shared/ui/kundensuche';
import { SharedUiKundenProfilModule } from '@drv/shared/ui/kunden-profil';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule, 
    SharedUiKundensucheModule,
    SharedUiKundenProfilModule,
    RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
