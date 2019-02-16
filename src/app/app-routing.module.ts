import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataService } from './services/data.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  providers:[
    DataService
  ]

  
})
export class AppRoutingModule {}
