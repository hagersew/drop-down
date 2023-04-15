import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { IDropdownOption } from '@shared/interface/IDropdown';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Input() options!: IDropdownOption[];
  @Input() placeholder: string = 'Select an option';
  @Output() currentValueChange = new EventEmitter();

  public currentValue!: IDropdownOption;
  public isDropdownOpen: boolean = false;

  constructor(private element: ElementRef) {}

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent): void {
    if (!this.element.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  select(value: IDropdownOption) {
    this.currentValue = value;
    this.currentValueChange.emit(this.currentValue);
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
