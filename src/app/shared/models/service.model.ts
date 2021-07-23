import { BaseModel } from '@models/base.model';
import { Booking } from './booking.model';

export class Service extends BaseModel<string> {
    id!: string;

    name!: string;

    bookings!: Booking[];
}
