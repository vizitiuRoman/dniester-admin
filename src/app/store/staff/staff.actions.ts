import { Create } from '@models/base.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Staff } from '@models/staff.model';

export const loadStaffs = createAction('[Staff/API] Load Staffs');

export const beginAddStaff = createAction(
    '[Staff/API] Begin Add Staff',
    props<{ data: Create<Staff, string> }>()
);

export const beginUpdateStaff = createAction(
    '[Staff/API] Begin Update Staff',
    props<{ data: Staff }>()
);

export const beginDeleteStaffs = createAction(
    '[Staff/API] Begin Delete Staffs',
    // tslint:disable-next-line:no-any
    props<{ ids: any[] }>()
);

export const addStaff = createAction(
    '[Staff/API] Add Staff',
    props<{ data: Staff }>()
);

export const upsertStaff = createAction(
    '[Staff/API] Upsert Staff',
    props<{ booking: Staff }>()
);

export const addStaffs = createAction(
    '[Staff/API] Add Staffs',
    props<{ data: Staff[] }>()
);

export const upsertStaffs = createAction(
    '[Staff/API] Upsert Staffs',
    props<{ bookings: Staff[] }>()
);

export const updateStaff = createAction(
    '[Staff/API] Update Staff',
    props<{ data: Update<Staff> }>()
);

export const updateStaffs = createAction(
    '[Staff/API] Update Staffs',
    props<{ bookings: Update<Staff>[] }>()
);

export const deleteStaff = createAction(
    '[Staff/API] Delete Staff',
    props<{ id: string }>()
);

export const deleteStaffs = createAction(
    '[Staff/API] Delete Staffs',
    // tslint:disable-next-line:no-any
    props<{ ids: any[] }>()
);

export const clearStaffs = createAction('[Staff/API] Clear Staffs');
