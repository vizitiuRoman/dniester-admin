import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { loadServices } from '@store/service/service.actions';
import { State } from '@store/index';
import { selectAllServices } from '@store/service/service.selectors';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss',],
})
export class ServicesComponent implements OnInit {
    constructor(private store: Store<State>) {
        this.store.dispatch(loadServices());
    }

    ngOnInit(): void {
        this.store.select(selectAllServices).subscribe((data) => {
        });
    }
}
