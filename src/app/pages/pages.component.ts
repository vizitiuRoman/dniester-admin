import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  template: `<router-outlet></router-outlet>`,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
