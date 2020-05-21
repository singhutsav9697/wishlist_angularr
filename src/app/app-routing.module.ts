import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddWisheditemsComponent } from './add-wisheditems/add-wisheditems.component';
import { ListWisheditemsComponent } from './list-wisheditems/list-wisheditems.component';
import { WishlistMgtComponent } from './wishlist-mgt/wishlist-mgt.component';


const routes: Routes = [

{
  path:'wishlist-mgt',
  component:WishlistMgtComponent
},
{
  path:'add-wisheditems',
  component:AddWisheditemsComponent
},
{
 path:'list-wisheditems',
 component:ListWisheditemsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
