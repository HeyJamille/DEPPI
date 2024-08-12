import { Routes } from '@angular/router';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { HomeComponent } from './pages/home/home.component';
import { ExtensaoComponent } from './pages/extensao/extensao.component';
import { InovacaoComponent } from './pages/inovacao/inovacao.component';
import { PosGraduacaoComponent } from './pages/pos-graduacao/pos-graduacao.component';

export const routes: Routes = [
    {
        path: 'pesquisa',
        component: PesquisaComponent
    },
    {
        path: 'extensao',
        component: ExtensaoComponent
    },
    {
        path: 'inovacao',
        component: InovacaoComponent
    },
    {
        path: 'pos_graduacao',
        component: PosGraduacaoComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
