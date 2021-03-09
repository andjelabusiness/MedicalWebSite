import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogovanjeComponent } from './logovanje/logovanje.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { AdminComponent } from './admin/admin.component';
import { IstrazivacComponent } from './istrazivac/istrazivac.component';
import { AzuriranjeComponent } from './azuriranje/azuriranje.component';
import { GostComponent } from './gost/gost.component';
import { ApotekaComponent } from './apoteka/apoteka.component';
import { BolestiComponent } from './bolesti/bolesti.component';
import { BolgostComponent } from './bolgost/bolgost.component';


const routes: Routes = [
  {path:"", component:LogovanjeComponent},
  {path:"log", component:LogovanjeComponent},
  {path:"reg", component:RegistracijaComponent},
  {path:"admin", component:AdminComponent},
  {path:"istrazivac", component:IstrazivacComponent},
  {path:"azuriranje", component:AzuriranjeComponent},
  {path:"gost", component:GostComponent},
  {path:"apoteka", component:ApotekaComponent},
  {path:"bolesti", component:BolestiComponent},
  {path:"bolgost", component:BolgostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
