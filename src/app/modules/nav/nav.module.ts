import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/platform-browser';

import { RouterModule } from "@angular/router";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./modules/material.module";

import {NavComponent} from "./nav.component";

import {NavService} from "./nav.service";

@NgModule({
    declarations: [
        NavComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MaterialModule
    ],
    providers: [
        NavService
    ],
    bootstrap: [NavComponent]
})
export class SearchModule { }
