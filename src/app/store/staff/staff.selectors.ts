import { createFeatureSelector, createSelector } from '@ngrx/store';

import { staffsFeatureKey } from './staff.reducer';
import * as fromStaff from './staff.reducer';

export const selectStaffState = createFeatureSelector<fromStaff.State>(
    staffsFeatureKey
);

export const selectStaffIds = createSelector(
    selectStaffState,
    fromStaff.selectStaffIds
);
export const selectStaffEntities = createSelector(
    selectStaffState,
    fromStaff.selectStaffEntities
);
export const selectAllStaffs = createSelector(
    selectStaffState,
    fromStaff.selectAllStaffs
);
export const selectStaffTotal = createSelector(
    selectStaffState,
    fromStaff.selectStaffTotal
);
export const selectCurrentStaffId = createSelector(
    selectStaffState,
    fromStaff.getSelectedStaffId
);

export const selectCurrentStaff = createSelector(
    selectStaffEntities,
    selectCurrentStaffId,
    (entities, id) => (id ? entities[id] : {})
);
