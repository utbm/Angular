import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";
// import 'core-js/es6/map';

@Injectable()
export class CommServiceService {

    constructor(private _http: Http) { }

    getUsers() {
        return this._http.get("https://jsonplaceholder.typicode.com/users").map((res: Response) => res.json());
    }
}
