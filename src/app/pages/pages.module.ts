import { NgModule } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    imports: [
        PagesRoutingModule,
        SidebarModule,
        NbLayoutModule,
    ],
    declarations: [
        PagesComponent,
    ],
})
export class PagesModule {
}
