import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListDetailComponent } from './list-detail/list-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full'},
  { path: 'lists', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'list-detail/:id', component: ListDetailComponent, data: {animation: 'DetailPage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
