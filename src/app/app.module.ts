import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWisheditemsComponent } from './add-wisheditems/add-wisheditems.component';
import { ListWisheditemsComponent } from './list-wisheditems/list-wisheditems.component';
import { WishlistMgtComponent } from './wishlist-mgt/wishlist-mgt.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWisheditemsComponent,
    ListWisheditemsComponent,
    WishlistMgtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
