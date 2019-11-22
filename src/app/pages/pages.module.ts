import { NgModule } from "@angular/core";
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import {FormsModule} from '@angular/forms';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

//ng2charts
// import { ChartsModule } from 'ng2-charts';

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
    ],//exportamos porque se usaran fuera del modulo
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        //aqui va el modulo shared
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})

export class PagesModule{}