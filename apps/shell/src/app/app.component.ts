import {Component, EnvironmentInjector, inject, InjectionToken, Injector, OnInit} from '@angular/core';
import {loadRemoteModule} from "@nrwl/angular/mf";
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {NgElement, WithProperties} from "@angular/elements";


@Component({
  selector: 'drv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'shell';

  constructor (@Inject(DOCUMENT) private document: Document, private environmentInjector: EnvironmentInjector, private injector: Injector) {
  }

  ngOnInit(): void {
    loadRemoteModule('remote1', './Module').then(
      (m) => m.defineWebComponents).then((res) => {
      res(this.injector);
      const wc = this.document.createElement('remote1-widget-wc') as NgElement & WithProperties<{ parameter: string }>;
      document.getElementById("remote1-widget")?.appendChild(wc);
      return undefined;
    })
  }

}
