import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTES } from './app.routes';

//modulos
import { PagesModule } from './pages/pages.module';

//temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//servicios
import { ServiceModule } from './services/service.module';
import { SharedModule } from './shared/shared.module';
//componetntes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    // PagesModule, // Este se llama de forma dinamica en el routes
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
