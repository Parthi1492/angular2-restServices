import {TestBed} from '@angular/core/testing';

import {RestComponent} from './rest.component';

describe('RestComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [RestComponent] }));

    it('should instantiate the RestComponent', () => {
        let fixture = TestBed.createComponent(RestComponent);
        expect(fixture.componentInstance instanceof RestComponent).toBe(true, 'should create RestComponent');
    });
});	