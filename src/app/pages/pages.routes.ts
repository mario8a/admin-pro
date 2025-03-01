import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
// Mantenimientos
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
// guards
import { LoginGuardGuard} from '../services/service.index';
import { AdminGuard } from '../services/service.index';
import {VerificatokenGuard} from '../services/guards/verificatoken.guard'



const pagesRoutes: Routes = [
    
    {
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate:[VerificatokenGuard],
        data: {titulo: 'Dashboard'}
    },
    {path: 'progress', component: ProgressComponent,  data: {titulo: 'Progress'}},
    {path: 'graficas1', component: Graficas1Component,  data: {titulo: 'Graficas'}},
    {path: 'promesas', component: PromesasComponent,  data: {titulo: 'Promesas'}},
    {path: 'rxjs', component: RxjsComponent,  data: {titulo: 'Rxjs'}},
    {path: 'account-settings', component: AccountSettingsComponent,  data: {titulo: 'Ajustes de tema'}},
    {path: 'perfil', component: ProfileComponent,  data: {titulo: 'perfil de usuario'}},
    {path: 'busqueda/:termino', component: BusquedaComponent,  data: {titulo: 'Buscador'}},

    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [AdminGuard],
        data: {titulo: 'Mantenimiento de usuarios'}
    },

    {path: 'hospitales', component: HospitalesComponent,  data: {titulo: 'Mantenimiento de hospitales'}},
    {path: 'medicos', component: MedicosComponent,  data: {titulo: 'Mantenimiento de medicos'}},
    {path: 'medico/:id', component: MedicoComponent,  data: {titulo: 'Actualizar medico'}},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}

];

//Se usa forChuld para rutas hijas
export  const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);