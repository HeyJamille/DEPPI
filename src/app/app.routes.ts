import { Routes } from '@angular/router';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'pesquisa',
        component: PesquisaComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
