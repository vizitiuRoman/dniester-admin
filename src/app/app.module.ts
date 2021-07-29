import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    NbAuthModule,
    NbPasswordAuthStrategy,
    NbTokenLocalStorage,
} from '@nebular/auth';
import {
    NbThemeModule,
    NbSidebarModule,
    NbSidebarService,
    NbToastrModule, NbWindowModule, NbDialogModule, NbDatepickerModule, NbMenuModule,
} from '@nebular/theme';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ServicesComponent } from '@pages/services/services.component';
import { environment } from '@environments/environment';
import { TokenInterceptor } from '@interceptors/token.interceptor';

import { reducers, metaReducers } from './store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent, ServicesComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({ name: 'default' }),
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbDialogModule.forRoot(),
        NbWindowModule.forRoot(),
        NbToastrModule.forRoot(),
        FormsModule,
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
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
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
