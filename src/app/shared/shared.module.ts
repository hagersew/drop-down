import { NgModule } from '@angular/core';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [DropDownComponent],
  exports: [DropDownComponent],
})
export class SharedModule {}
