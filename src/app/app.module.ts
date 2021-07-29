import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    NbAuthModule,
    NbPasswordAuthStrategy,
    NbTokenLocalStorage,
} from '@nebular/auth';
import {
    NbSidebarService, NbThemeModule,
} from '@nebular/theme';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ServicesComponent } from '@pages/services/services.component';
import { environment } from '@environments/environment';
import { TokenInterceptor } from '@interceptors/token.interceptor';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ComboBoxModule, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { MaskedTextBoxModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { SidebarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { RecurrenceEditorModule, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import { reducers, metaReducers } from './store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent, ServicesComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),

        // EJ2 MODULES
        ScheduleModule,
        RecurrenceEditorModule,
        DropDownListModule,
        MultiSelectModule,
        ComboBoxModule,
        CheckBoxModule,
        ButtonModule,
        SwitchModule,
        SplitButtonModule,
        RadioButtonModule,
        TreeViewModule,
        DatePickerModule,
        TimePickerModule,
        TextBoxModule,
        MaskedTextBoxModule,
        ListViewModule,
        SidebarModule,
        ChartModule,
        GridModule,
        DialogModule,
        ReactiveFormsModule,
        ToastModule,

        NbThemeModule.forRoot(),
        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: 'email',

                    token: {
                        key: 'token.accessToken',
                    },

                    baseEndpoint: environment.API_URL,
                    login: {
                        endpoint: '/company/auth/login',
                        redirect: {
                            success: '/menu', // welcome page path
                            failure: null, // stay on the same page
                        },
                    },
                    register: {
                        // ...
                        endpoint: '/company/auth/register',
                    },
                }),
            ],
            forms: {},
        }),
    ],
    providers: [
        NbSidebarService,
        NbTokenLocalStorage,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
