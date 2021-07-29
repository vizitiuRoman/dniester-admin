import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StaffEffects } from '@store/staff/staff.effects';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NbButtonGroupModule, NbButtonModule, NbDialogModule } from '@nebular/theme';

import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsComponent } from './staffs.component';


@NgModule({
    declarations: [
        StaffsComponent,
        AddStaffComponent,
        EditStaffComponent
    ],
    imports: [
        CommonModule,
        NbDialogModule.forChild(),
        StaffsRoutingModule,
        EffectsModule.forFeature([StaffEffects]),
        DropDownListModule,
        NbButtonModule,
        NbButtonGroupModule,
    ],
})
export class StaffsModule {
}
