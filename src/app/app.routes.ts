import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuardGuard } from './services/service.index';


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {
        path:'',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        loadChildren: './pages/pages.module#PagesModule'
    },
    {path: '**', component: NopagefoundComponent}
];
//forRoot se usa para rutas principales, child es para rutas dentrod e otras rutas
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});