import { Injectable } from '@angular/core';
import { LeserviceService } from './leservice.service';

@Injectable()
export class TheloggerService {

  constructor() { }

  debug(trace: string) {
    console.log(trace);
  }
}

// Pour creer service 
// bg g s Leservices/Thelogger
