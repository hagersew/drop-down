import { Component } from '@angular/core';
import { IDropdownOption } from './shared/interface/IDropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   dropdownOptions : IDropdownOption[] = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
    { id: 6, name: 'Option 6' },
    { id: 7, name: 'Option 7' },
    { id: 8, name: 'Option 8' },
    { id: 9, name: 'Option 9' },
    { id: 10, name: 'Option 10' },
    { id: 11, name: 'Option 11' },
  ];
  public dropdownValueChanged = (e: IDropdownOption) => {
    console.log(e.name);
  };
}
