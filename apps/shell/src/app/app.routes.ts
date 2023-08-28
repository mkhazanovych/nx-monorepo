import { EntryComponent } from './entry/entry.component';
import { Route } from '@angular/router';
import {loadRemoteModule} from "@nrwl/angular/mf";

export const appRoutes: Route[] = [
  {
    path: 'remote2',
    loadChildren: () =>
      loadRemoteModule('remote2', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'remote1',
    loadChildren: () =>
      loadRemoteModule('remote1', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: EntryComponent,
  },
];
