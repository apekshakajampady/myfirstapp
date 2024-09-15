import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LeftComponent } from 'src/components/leftComponent/left/left.component';
import { RightComponent } from 'src/components/rightComponent/right/right.component';
import { MiddleComponent } from 'src/components/middleComponent/middle/middle.component';

import { FormsModule } from '@angular/forms';
import { StructureComponent } from 'src/directives/structuralDirective/structure/structure.component';
import { AttributeComponent } from 'src/directives/attributeDirective/attribute/attribute.component';

import { HomeComponent } from 'src/routers/home/home/home.component';
import { ContactComponent } from 'src/routers/contact/contact/contact.component';
import { AboutComponent } from 'src/routers/about/about/about.component';

import { ItemDetailComponent } from 'src/routers/itemDetail/item-detail/item-detail.component';
import { ItemListComponent } from 'src/routers/itemList/item-list/item-list.component';

import { CounterService } from 'src/service/counter.service';

import { HomesComponent } from 'src/datasharing/homes/homes/homes.component';
import { AboutsComponent } from 'src/datasharing/abouts/abouts/abouts.component';

import { ParentComponent } from 'src/datasharing/parent/parent/parent.component';
import { ChildComponent } from 'src/datasharing/child/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    MiddleComponent,
    StructureComponent,
    AttributeComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ItemDetailComponent,
    ItemListComponent,
    HomesComponent,
    AboutsComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
