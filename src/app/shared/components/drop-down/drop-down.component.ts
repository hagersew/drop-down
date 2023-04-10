import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDropdownOption } from '@shared/interface/IDropdown';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Input() options!: IDropdownOption[];
  @Output() currentValueChange = new EventEmitter();

  public currentValue!: IDropdownOption;
  public isDropdownOpen: boolean = false;

  public placeholder: string = 'Select an option';

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  select(value: any) {
    this.currentValue = value;
    this.closeDropdown();
    this.currentValueChange.emit(this.currentValue);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
