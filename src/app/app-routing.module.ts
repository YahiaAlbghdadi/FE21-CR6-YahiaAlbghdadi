import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { ContentComponent } from './content/content.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path:"",component:ContentComponent
},{
  path:"blog",component:BlogComponent
},{
  path:"travels",component:TravelsComponent
},{
  path:"cart",component:CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
