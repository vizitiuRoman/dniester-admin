import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { GenericTableComponent } from '@components/generic-table/generic-table.component';
import { Service } from '@models/service.model';
import { loadServices } from '@store/service/service.actions';
import { State } from '@store/index';
import { selectAllServices } from '@store/service/service.selectors';

@Component({
    selector: 'app-services',
    templateUrl:
        '../../shared/components/generic-table/generic-table.component.html',
    styleUrls: [
        '../../shared/components/generic-table/generic-table.component.scss',
    ],
})
export class ServicesComponent
    extends GenericTableComponent<Service, string>
    implements OnInit {
    constructor(private store: Store<State>) {
        super();
        this.store.dispatch(loadServices());
    }

    ngOnInit(): void {
        this.store.select(selectAllServices).subscribe((data) => {
            this.data = data;
        });
    }
}
