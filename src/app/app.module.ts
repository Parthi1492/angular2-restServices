import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RestComponent} from './rest/rest.component';
import { RestService }          from './rest/rest.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent,
        RestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [appRoutingProviders,  RestService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
