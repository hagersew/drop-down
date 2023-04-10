import { NgModule } from '@angular/core';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [DropDownComponent],
  exports: [DropDownComponent],
})
export class SharedModule {}
