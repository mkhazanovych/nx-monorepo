import {ComponentRef, createComponent, EnvironmentInjector, Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './remote-entry.component';
import { remoteRoutes } from './entry.routes';
import { SharedUiKundensucheModule } from '@drv/shared/ui/kundensuche';
import { SharedUiKundenProfilModule } from '@drv/shared/ui/kunden-profil';
import {WidgetComponent} from "../web-components/widget/widget.component";




export function defineWebComponent( environmentInjector: EnvironmentInjector, hostElement?: Element, elementInjector?: Injector): ComponentRef<WidgetComponent> {
  // using createCustomElement from angular package it will convert angular component to stander web component
  const el = createComponent(WidgetComponent, {
    environmentInjector: environmentInjector,
    elementInjector: elementInjector,
    hostElement: hostElement
  });

  return el;
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


