import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { SeccionContenedorComponent } from './seccion-contenedor/seccion-contenedor.component';

import { LoginComponent } from './seccion-login/login/login.component';
import { RegistoComponent } from './seccion-login/login/registo/registo.component';
import { ProdGuardService as guard } from './guards/prod-guards.service'

const routes : Routes =[


  {path:'portafolio',component: SeccionContenedorComponent,data: { expectedRol: ['admin', 'user'] }  },
  {path: 'login', component:LoginComponent },
  {path: 'registro', component:RegistoComponent},
  {path:'', redirectTo:'login' ,pathMatch:'full'},


     

  
  ] 




@NgModule({
imports : [RouterModule.forRoot(
  routes
)
],
exports: [RouterModule]
})
export class AppRoutingModule { }
