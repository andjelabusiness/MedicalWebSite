import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogovanjeComponent } from './logovanje/logovanje.component';
import {FormsModule} from '@angular/forms';
import { RegistracijaComponent } from './registracija/registracija.component';
import { AdminComponent } from './admin/admin.component';
import { IstrazivacComponent } from './istrazivac/istrazivac.component';
import { AzuriranjeComponent } from './azuriranje/azuriranje.component';
import { GostComponent } from './gost/gost.component';
import { ApotekaComponent } from './apoteka/apoteka.component';
import { BolestiComponent } from './bolesti/bolesti.component';
import { BolgostComponent } from './bolgost/bolgost.component';

@NgModule({
  declarations: [
    AppComponent,
    LogovanjeComponent,
    RegistracijaComponent,
    AdminComponent,
    IstrazivacComponent,
    AzuriranjeComponent,
    GostComponent,
    ApotekaComponent,
    BolestiComponent,
    BolgostComponent
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
