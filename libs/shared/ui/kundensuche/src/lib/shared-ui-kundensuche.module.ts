import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KundensucheComponent } from './kundensuche/kundensuche.component';

@NgModule({
  imports: [CommonModule],
  declarations: [KundensucheComponent],
  exports: [KundensucheComponent],
})
export class SharedUiKundensucheModule {}
