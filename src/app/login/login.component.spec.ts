import {TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';

describe('LoginComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [LoginComponent] }));

    it('should instantiate the LoginComponent', () => {
        let fixture = TestBed.createComponent(LoginComponent);
        expect(fixture.componentInstance instanceof LoginComponent).toBe(true, 'should create LoginComponent');
    });

});