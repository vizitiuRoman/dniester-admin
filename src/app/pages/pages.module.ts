import { NgModule } from '@angular/core';

import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ComboBoxModule, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { MaskedTextBoxModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { RecurrenceEditorModule, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    imports: [
        PagesRoutingModule,

        SidebarModule,
        ScheduleModule, RecurrenceEditorModule,
        DropDownListModule, MultiSelectModule, ComboBoxModule,
        CheckBoxModule, ButtonModule, SwitchModule, RadioButtonModule,
        SplitButtonModule,
        ToastModule,
        DatePickerModule, TimePickerModule,
        ListViewModule,
        TextBoxModule, MaskedTextBoxModule,
        ChartModule,
        GridModule,
        DialogModule,
    ],
    declarations: [
        PagesComponent,
    ],
})
export class PagesModule {
}
