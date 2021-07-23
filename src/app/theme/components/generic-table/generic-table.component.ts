import { Component, OnInit } from '@angular/core';

import { DATA_TIME_FORMAT } from '@constants/apis';
import { BaseModel } from '@models/base.model';

import * as moment from 'moment';

@Component({
    selector: 'app-generic-table',
    templateUrl: './generic-table.component.html',
    styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent<T extends BaseModel<ID>, ID>
    implements OnInit {
    public customColumn!: string;
    public defaultColumns: (keyof T)[] = ['id', 'createdAt', 'updatedAt'];
    public allColumns: string[] = [
        this.customColumn,
        ...(this.defaultColumns as string[]),
    ];
    public actions!: string[];
    public data!: T[];

    constructor() {}

    ngOnInit(): void {}

    public format(column: keyof T, element: T): string {
        switch (column) {
            case 'updatedAt':
                return moment(element.updatedAt)
                    .format(DATA_TIME_FORMAT)
                    .toString();
            case 'createdAt':
                return moment(element.createdAt)
                    .format(DATA_TIME_FORMAT)
                    .toString();
            default:
                return element[column] as never;
        }
    }
}
