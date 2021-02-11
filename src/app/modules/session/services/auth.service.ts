import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/http';

import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiHost: string = `${environment.api}/session`;

    constructor(http: HttpClient) { }

}