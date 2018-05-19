import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-word-filter',
  template: `
    <select
      class="form-control"
      style="width: 200px;"
      value="{{filterMode}}"
      (change)="onSetFilterMode.emit($event.target.value)"
    >
      <option value="SHOW_ALL">SHOW ALL</option>
      <option value="SHOW_FORGOT">SHOW FORGOT</option>
      <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
    </select>
  `
})

export class WordFilterComponent {
  @Input() filterMode: string;
  @Output() onSetFilterMode = new EventEmitter<string>();
}
