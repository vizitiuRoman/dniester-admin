import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Staff } from '@models/staff.model';

import * as StaffActions from './staff.actions';

export const staffsFeatureKey = 'staffs';

export interface State extends EntityState<Staff> {
    selectedStaffId: string | null;
}

export const adapter: EntityAdapter<Staff> = createEntityAdapter<Staff>();

export const initialState: State = adapter.getInitialState({
    selectedStaffId: null,
});

export const reducer = createReducer(
    initialState,
    on(StaffActions.addStaff, (state, action) =>
        adapter.addOne(action.data, state)
    ),
    on(StaffActions.upsertStaff, (state, action) =>
        adapter.upsertOne(action.booking, state)
    ),
    on(StaffActions.addStaffs, (state, action) =>
        adapter.addMany(action.data, state)
    ),
    on(StaffActions.upsertStaffs, (state, action) =>
        adapter.upsertMany(action.bookings, state)
    ),
    on(StaffActions.updateStaff, (state, action) =>
        adapter.updateOne(action.data, state)
    ),
    on(StaffActions.updateStaffs, (state, action) =>
        adapter.updateMany(action.bookings, state)
    ),
    on(StaffActions.deleteStaff, (state, action) =>
        adapter.removeOne(action.id, state)
    ),
    on(StaffActions.deleteStaffs, (state, action) =>
        adapter.removeMany(action.ids, state)
    ),
    on(StaffActions.clearStaffs, (state) => adapter.removeAll(state))
);

export const getSelectedStaffId = (state: State) => state.selectedStaffId;

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

export const selectStaffIds = selectIds;

// select the dictionary of user entities
export const selectStaffEntities = selectEntities;

// select the array of users
export const selectAllStaffs = selectAll;

// select the total user count
export const selectStaffTotal = selectTotal;
