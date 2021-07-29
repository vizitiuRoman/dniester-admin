import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'services',
        loadChildren: () => import('@pages/services/services.module')
            .then((m) => m.ServicesModule)
    },
    {
      path: 'bookings',
        loadChildren: () => import('@pages/bookings/bookings.module')
            .then((m) => m.BookingsModule)
    },
    {
      path: 'staffs',
        loadChildren: () => import('@pages/staffs/staffs.module')
            .then((m) => m.StaffsModule)
    },
    {
      path: '',
      redirectTo: 'staffs',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
