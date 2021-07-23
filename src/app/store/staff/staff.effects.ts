import { Injectable } from '@angular/core';

import { Actions } from '@ngrx/effects';

import { Staff } from '@models/staff.model';
import { StaffService } from '@services/staff.service';
import { CrudEffect } from '@store/core/crud.effect';

import {
    addStaff,
    addStaffs,
    beginAddStaff,
    beginDeleteStaffs,
    beginUpdateStaff,
    deleteStaffs,
    loadStaffs,
    updateStaff,
} from '@store/staff/staff.actions';

@Injectable()
export class StaffEffects extends CrudEffect<Staff, string> {
    constructor(actions$: Actions, staffService: StaffService) {
        super(
            actions$,
            staffService,
            loadStaffs,
            addStaffs,
            addStaff,
            updateStaff,
            deleteStaffs,
            beginAddStaff,
            beginUpdateStaff,
            beginDeleteStaffs
        );
    }
}
