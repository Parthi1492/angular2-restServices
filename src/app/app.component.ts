import {Component, OnInit} from '@angular/core';
import { RestService } from './rest/rest.service';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    providers: [RestService]
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
