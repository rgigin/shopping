import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes =[
  {path:'products/:id',component:ProductListComponent},
  {path:'',component:HomeComponent},
  { path: 'products',
    redirectTo: 'products/',
    pathMatch: 'full'}
  //   ,
  // {path:'products',component:ProductListComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
