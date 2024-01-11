import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEntityData, withEffects } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(), provideEffects(), provideRouterStore(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideEntityData(entityConfig, withEffects())]
};
