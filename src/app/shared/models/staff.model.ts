import { StaffWorkDays } from '@interfaces/staff-work-days';
import { BaseModel } from '@models/base.model';
import { GenderEnum } from '@enums/gender.enum';

export class Staff extends BaseModel<string>{
    name!: string;
    gender!: GenderEnum;
    specialization!: string;
    experience!: string;
    designation!: string;
    email!: string;
    mobile!: string;
    startHour!: string;
    endHour!: string;
    availableDays!: number[];
    workDays!: StaffWorkDays[];
}
