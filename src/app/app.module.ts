import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosSeccion1Component } from './datos-seccion1/datos-seccion1.component';
import { DatosEducacionComponent } from './datos-educacion-experiencia/datos-educacion/datos-educacion.component';
import { DatosExperienciaComponent } from './datos-educacion-experiencia/datos-experiencia/datos-experiencia.component';
import { SeccionHabilidadesTecnicasBlandasComponent } from './seccion-habilidades-tecnicas-blandas/seccion-habilidades-tecnicas-blandas.component';
import { SeccionLoginComponent } from './seccion-login/seccion-login.component';
import { LoginComponent } from './seccion-login/login/login.component';
import { DatosEducacionExperienciaComponent } from './datos-educacion-experiencia/datos-educacion-experiencia.component';
import { HttpClientModule } from '@angular/common/http';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { NgModule } from '@angular/core';
import { RegistoComponent } from './seccion-login/login/registo/registo.component';
import { ToastrModule } from 'ngx-toastr';
import { SeccionContenedorComponent } from './seccion-contenedor/seccion-contenedor.component';
import { interceptorProvider, ProdInterceptorService } from './interceptors/prod-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HabilidadesBlandasComponent } from './habilidades-blandas/habilidades-blandas.component';
import { ProyectosRealizadosComponent } from './proyectos-realizados/proyectos-realizados.component';





@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    DatosSeccion1Component,
    DatosEducacionExperienciaComponent,
    DatosEducacionComponent,
    DatosExperienciaComponent,
    SeccionHabilidadesTecnicasBlandasComponent,
    SeccionLoginComponent,
    LoginComponent, 
    RegistoComponent,
    SeccionContenedorComponent,
    HabilidadesBlandasComponent,
    ProyectosRealizadosComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      FontAwesomeModule,
      HttpClientModule,
      AppRoutingModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
  
   
  ],

  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})

export class AppModule { }
