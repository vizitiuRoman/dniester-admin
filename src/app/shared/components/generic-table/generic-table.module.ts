import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbTreeGridModule } from '@nebular/theme';

import { GenericTableComponent } from './generic-table.component';

@NgModule({
    declarations: [GenericTableComponent],
    exports: [GenericTableComponent],
    imports: [CommonModule, NbTreeGridModule],
})
export class GenericTableModule {}
