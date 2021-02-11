import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NotFoundErrorComponent} from "./components/404.component";
import {NotAuthorizedErrorComponent} from "./components/401.component";
import {ServerErrorComponent} from "./components/501.component";

const routes: Routes = [
    { path: '404', component: NotFoundErrorComponent },
    { path: '401', component: NotAuthorizedErrorComponent },
    { path: '501', component: ServerErrorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorsRoutingModule { }
