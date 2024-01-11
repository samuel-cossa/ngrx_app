import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((page) => page.HomeComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((page) => page.NotFoundComponent)
  }
];
