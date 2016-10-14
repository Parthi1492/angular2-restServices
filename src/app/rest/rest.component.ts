import {Component} from '@angular/core';
import { RestService } from './rest.service';

@Component({
    selector: 'rest',
    template: '',
    providers: [RestService]
})

export class RestComponent {
	constructor(private rest: RestService) { }
}