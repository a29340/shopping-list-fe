import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import {AuthGuard} from '@auth0/auth0-angular';


const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full'},
  { path: 'lists', component: HomeComponent, data: {animation: 'HomePage'}, canActivate :[AuthGuard] },
  { path: 'list-detail/:id', component: ListDetailComponent, data: {animation: 'DetailPage'}, canActivate :[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
