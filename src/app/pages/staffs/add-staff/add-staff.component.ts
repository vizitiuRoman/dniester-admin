import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'app-add-staff',
    templateUrl: './add-staff.component.html',
    styleUrls: ['./add-staff.component.scss'],
})
export class AddStaffComponent {
    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: NbDialogRef<AddStaffComponent>,
    ) {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            gender: ['', Validators.required],
            specialization: ['', Validators.required],
            experience: ['', Validators.required],
            designation: ['', Validators.required],
            email: ['', Validators.required],
            mobile: ['', Validators.required],
            startHour: ['', Validators.required],
            endHour: ['', Validators.required],
            availableDays: ['', Validators.required],
            workDays: ['', Validators.required],
        });
    }

    public close(): void {
        this.dialogRef.close(this.form.value)
    }

}
