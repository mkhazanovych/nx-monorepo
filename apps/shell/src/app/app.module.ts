import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ShellFooterModule } from '@drv/shell/footer';
import { ShellHeaderModule } from '@drv/shell/header';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [AppComponent, EntryComponent],
  imports: [
    BrowserModule,
    ShellFooterModule,
    ShellHeaderModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
