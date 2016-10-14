import { inject } from '@angular/core/testing';

import {RestService} from './rest.service';

describe('RestService', () => {
  let subject: RestService = null;
  beforeEach(function() {
    this.restService = new RestService();
  });
  /*beforeEach(inject([RestService], (restService: RestService) => {
   subject = restService;
  }));*/

  it('should have name property set', function() {
    expect(subject.name).toBe('Injected Service');
  });
});

/*import {
  beforeEach,
  beforeEachProviders,
  describe
  expect,
  it,
  inject,
  fakeAsync,
  TestComponentBuilder
} from '@angular/core/testing';*/

/*
import { inject } from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
//import { Provider } from '@angular/core/src/di';
import { RestService } from './rest.service';

describe('RestServiceTest', () => {
  TestBed.configureTestingModule({
       //declarations: [ TwainComponent ],
       providers:    [ RestService ],
    });

  it('method should return false', () => {
       let userservice = TestBed.get(RestService);
        expect(userservice.check()).toBeFalsy();
    });
 
    //let = fixture.debugElement.injector.get(RestService);
  //let employeeService = new RestService();

  /*it('method should return false', inject([RestService], (service: RestService) => {
    expect(service.check()).toBeFalsy();
  }));
  



});*/

/*import { inject } from '@angular/core/testing';
import { RestService } from './rest.service';


describe('RestServiceTest', () => {
  let subject: RestService = null;

  /*beforeEachProviders(() => [
  provide(RestService, {useClass: RestService})
]);

  beforeEach(inject([RestService], (restService: RestService) => {
   subject = restService;
  }));

  it('method should return false', () => {
    expect(subject.check()).toBeFalsy();
  });

  /*it('#isLoggedIn should return false after creation', inject([RestService], (service: RestService) => {
    expect(service.check()).toBeFalsy();
  }));
});*/

//import { By }           from '@angular/platform-browser';
//import { DebugElement } from '@angular/core';
/*import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  fakeAsync,
  TestComponentBuilder
} from '@angular/core/testing';

//import {  inject } from '@angular/core/testing';
//import { Provider } from '@angular/core/src/di';
import { RestService } from './rest.service';

describe('RestServiceTest', () => {
	beforeEach(() => {
    addProviders([UserService]);
  });
  beforeEachProviders(() => [
    
    RestService
  ]);
  //let employeeService = new RestService();

  it('method should return false', inject([RestService], (service: RestService) => {
    expect(service.check()).toBeFalsy();
  }));
});*/
