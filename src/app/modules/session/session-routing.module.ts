import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AccountComponent} from "./components/account.component";
import {SettingsComponent} from "./components/settings.component";
import {LoginComponent} from "./components/login.component";
import {SigninComponent} from "./components/signin.component";

const routes: Routes = [
    { path: 'account', component: AccountComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionRoutingModule { }
