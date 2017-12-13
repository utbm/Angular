import { Injectable } from '@angular/core';

@Injectable()
export class LeserviceService {

  constructor() { }

  plus(p1: number, p2: number): number {
    return p1 + p2;
  }
}
