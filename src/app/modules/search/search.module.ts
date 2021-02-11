import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./modules/material.module";

import { SearchComponent } from './search.component';
import { SearchFormComponent } from './search-form.component';

import {SearchService} from "./search.service";

@NgModule({
    declarations: [
        SearchComponent,
        SearchFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
    ],
    providers: [
        SearchService
    ],
    bootstrap: [SearchComponent]
})
export class SearchModule { }
