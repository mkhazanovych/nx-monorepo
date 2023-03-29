import { Versicherter } from '@drv/shared/types';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'drv-kundensuche',
  templateUrl: './kundensuche.component.html',
  styleUrls: ['./kundensuche.component.scss'],
})
export class KundensucheComponent {
  @Input() versicherte: Versicherter[] = [];
  @ViewChild('kundenauswahl') selected!: ElementRef; 
  @Output() kundenEmitter = new EventEmitter<string>();

  selectKunde(id: string) {
    this.kundenEmitter.emit(id);
    this.selected.nativeElement.value = '';
  }
}
