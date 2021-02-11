import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./modules/material.module";

import { SessionRoutingModule } from './session-routing.module';

import { AccountComponent } from './components/account.component';
import { AccountFormComponent } from './forms/account-form.component';
import {SettingsComponent} from "./components/settings.component";
import {SettingsFormComponent} from "./forms/settings-form.component";
import {LoginComponent} from "./components/login.component";
import {LoginFormComponent} from "./forms/login-form.component";
import {SigninComponent} from "./components/signin.component";
import {SigninFormComponent} from "./forms/signin-form.component";

import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AccountComponent,
        AccountFormComponent,
        SettingsComponent,
        SettingsFormComponent,
        LoginComponent,
        LoginFormComponent,
        SigninComponent,
        SigninFormComponent
    ],
    imports: [
        CommonModule,
        SessionRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
    ],
    providers: [
        AuthService
    ]
})
export class AppModule { }
