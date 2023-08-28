import {ApplicationRef, Component, EnvironmentInjector, inject, InjectionToken, Injector, OnInit} from '@angular/core';
import {loadRemoteModule} from "@nrwl/angular/mf";
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {NgElement, NgElementConstructor, WithProperties} from "@angular/elements";


@Component({
  selector: 'drv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'shell';

  constructor (@Inject(DOCUMENT) private document: Document, private environmentInjector: EnvironmentInjector, private injector: Injector, private applicationRef: ApplicationRef) {
  }

  ngOnInit(): void {
    loadRemoteModule('remote1', './Module').then(
      (m) => m.defineWebComponent).then((res) => res(this.applicationRef.injector, document.getElementById("remote1-widget")))
      .then((componentRef) => {
        this.applicationRef.attachView(componentRef.hostView);
        componentRef.instance.message = "use in portal";
        return undefined;
    })
  }

}
