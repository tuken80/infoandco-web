import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./modules/material.module";

import {HomeComponent} from "./home.component";

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        FlexLayoutModule,
        MaterialModule
    ]
})
export class HomeModule { }
