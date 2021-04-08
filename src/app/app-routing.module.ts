import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent } from './app.component';
import {CreateComponent} from './create/create.component'
import {ReadComponent} from './read/read.component'
const routes: Routes = [
  { path: '', component: CreateComponent },
  { path: 'create-user', component: CreateComponent },
  { path: 'get-users', component: ReadComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
