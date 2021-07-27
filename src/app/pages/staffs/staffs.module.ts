import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { StaffEffects } from '@store/staff/staff.effects';

import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsComponent } from './staffs.component';


@NgModule({
    declarations: [
        StaffsComponent,
    ],
    imports: [
        CommonModule,
        StaffsRoutingModule,
        EffectsModule.forFeature([StaffEffects]),
    ],
})
export class StaffsModule {
}
