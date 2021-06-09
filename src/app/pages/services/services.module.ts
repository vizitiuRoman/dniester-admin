import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { ServiceEffects } from '@store/service/service.effects';
import { GenericTableModule } from '@components/generic-table/generic-table.module';

import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ServicesRoutingModule,
        GenericTableModule,
        EffectsModule.forFeature([ServiceEffects]),
    ],
})
export class ServicesModule {}
