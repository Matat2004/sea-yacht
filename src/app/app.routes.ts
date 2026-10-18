
import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FlottaComponent } from './components/flotta/flotta.component';
import { ContattiComponent } from './components/contatti/contatti.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'SEA Yacht | Yacht di lusso'
  },
  {
    path: 'flotta',
    component: FlottaComponent,
    title: 'La Flotta | SEA Yacht'
  },
  {
    path: 'contatti',
    component: ContattiComponent,
    title: 'Chi Siamo e Contatti | SEA Yacht'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
