import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./components/not-found.component";

const routes: Routes = [
  { path: 'errors', loadChildren: () => import('./modules/errors/errors.module').then(mod => mod.ErrorsModule) },
  { path: 'session', loadChildren: () => import('./modules/session/session.module').then(mod => mod.SessionModule) },
  { path: 'home',   loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule) },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/errors/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
