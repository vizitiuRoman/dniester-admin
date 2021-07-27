import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '@store/index';
import { loadStaffs } from '@store/staff/staff.actions';
import { selectAllStaffs } from '@store/staff/staff.selectors';

@Component({
  selector: 'app-staff',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss']
})
export class StaffsComponent implements OnInit {

    constructor(private store: Store<State>) {
        this.store.dispatch(loadStaffs());
    }

    ngOnInit(): void {
        this.store.select(selectAllStaffs).subscribe((data) => {
        });
    }

}
