import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { NbDialogService } from '@nebular/theme';

import { State } from '@store/index';
import { loadStaffs } from '@store/staff/staff.actions';
import { selectAllStaffs } from '@store/staff/staff.selectors';
import { Staff } from '@models/staff.model';
import { AddStaffComponent } from '@pages/staffs/add-staff/add-staff.component';

@Component({
    selector: 'app-staff',
    templateUrl: './staffs.component.html',
    styleUrls: ['./staffs.component.scss'],
})
export class StaffsComponent implements OnInit {
    public staffs: Staff[] = [];

    constructor(
        private store: Store<State>,
        private dialogService: NbDialogService,
    ) {
        this.store.dispatch(loadStaffs());
    }

    ngOnInit(): void {
        this.store.select(selectAllStaffs).subscribe((data) => {
            this.staffs = data;
        });
    }

    public onAddStaff(): void {
        const ref = this.dialogService.open(AddStaffComponent);
        ref.onClose.subscribe(
            () => {
            }
        )
    }

    public onSpecialistClick($event: MouseEvent): void {

    }
}
