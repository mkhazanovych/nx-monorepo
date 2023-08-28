import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './remote-entry.component';
import { remoteRoutes } from './entry.routes';
import { SharedUiKundensucheModule } from '@drv/shared/ui/kundensuche';
import { SharedUiKundenProfilModule } from '@drv/shared/ui/kunden-profil';
import {WidgetComponent} from "../web-components/widget/widget.component";
import {createCustomElement} from "@angular/elements";



export function defineWebComponents(injector: Injector): void {
  // using createCustomElement from angular package it will convert angular component to stander web component
  const el = createCustomElement(WidgetComponent, {
    injector: injector
  });
  // using built in the browser to create your own custome element name
  customElements.define('remote1-widget-wc', el);
}

@NgModule({
  declarations: [RemoteEntryComponent, WidgetComponent],
  imports: [
    CommonModule,
    SharedUiKundensucheModule,
    SharedUiKundenProfilModule,
    RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {



}


