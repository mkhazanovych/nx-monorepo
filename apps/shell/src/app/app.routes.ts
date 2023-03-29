import { EntryComponent } from './entry/entry.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'remote2',
    loadChildren: () =>
      import('remote2/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'remote1',
    loadChildren: () =>
      import('remote1/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: EntryComponent,
  },
];
