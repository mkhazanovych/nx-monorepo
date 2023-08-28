import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'drv-remote1-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent {
  @Input()
  get message(): string { return this._message; }
  set message(message: string) {
    this._message = message;
  }
  private _message = '';

  @Output()
  clicked = new EventEmitter<void>();
}
