import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/http';

import {SearchModule} from "./search.module";

import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: SearchModule,
})
export class SearchService {
    private apiHost: string = `${environment.api}/search`;

    constructor(http: HttpClient) { }

}