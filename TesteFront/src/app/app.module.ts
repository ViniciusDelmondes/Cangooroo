import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormService} from '../app/components/template/form/form.service'
import {HttpClientModule} from '@angular/common/http'

import {LeafletModule} from '@asymmetrik/ngx-leaflet';


import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { HeaderComponent } from './components/template/header/header.component';
import { TopbarComponent } from './components/template/topbar/topbar.component';
import { AreaProductComponent } from './components/template/area-product/area-product.component';
import { FormComponent } from './components/template/form/form.component';
import { ResultComponent } from './views/result/result.component';
import { HotelsComponent } from './components/template/hotels/hotels.component';
import { MapComponent } from './components/template/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    HeaderComponent,
    TopbarComponent,
    AreaProductComponent,
    FormComponent,
    ResultComponent,
    HotelsComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LeafletModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
