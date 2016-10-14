import { Injectable } from '@angular/core';

@Injectable()
export class RestService {
  /*private val: boolean = false;

  check() {
    return this.val;
  }*/
  public name: string = 'Injected Service';
}