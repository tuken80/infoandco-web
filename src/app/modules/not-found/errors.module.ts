import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./modules/material.module";

import {NotFoundErrorComponent} from "./components/404.component";
import {NotAuthorizedErrorComponent} from "./components/401.component";
import {ServerErrorComponent} from "./components/501.component";

@NgModule({
    declarations: [
        NotFoundErrorComponent,
        NotAuthorizedErrorComponent,
        ServerErrorComponent
    ],
    imports: [
        FlexLayoutModule,
        MaterialModule
    ]
})
export class ErrorsModule { }
