import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/routers/about/about/about.component';
import { ContactComponent } from 'src/routers/contact/contact/contact.component';
import { HomeComponent } from 'src/routers/home/home/home.component';

import { ItemListComponent } from 'src/routers/itemList/item-list/item-list.component';
import { ItemDetailComponent } from 'src/routers/itemDetail/item-detail/item-detail.component';
import { HomesComponent } from 'src/datasharing/homes/homes/homes.component';
import { AboutsComponent } from 'src/datasharing/abouts/abouts/abouts.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'itemlist',component:ItemListComponent},
  {path:'item/:id',component:ItemDetailComponent},
  {path:'homes',component:HomesComponent},
  {path:'abouts',component:AboutsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
