import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromBooking from './booking/booking.reducer';
import * as fromService from './service/service.reducer';
import * as fromStaff from './staff/staff.reducer';

export interface State {
    [fromBooking.bookingsFeatureKey]: fromBooking.State;
    [fromService.servicesFeatureKey]: fromService.State;
    [fromStaff.staffsFeatureKey]: fromService.State;
}

export const reducers: ActionReducerMap<State> = {
    [fromBooking.bookingsFeatureKey]: fromBooking.reducer,
    [fromService.servicesFeatureKey]: fromService.reducer,
    [fromStaff.staffsFeatureKey]: fromService.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
