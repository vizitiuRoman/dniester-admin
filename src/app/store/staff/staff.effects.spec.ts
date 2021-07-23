import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs';

import { StaffEffects } from './staff.effects';

describe('StaffEffects', () => {
    // tslint:disable-next-line:prefer-const no-any
    let actions$: Observable<any>;
    let effects: StaffEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StaffEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(StaffEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
