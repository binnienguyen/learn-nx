import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'login-app',
    loadChildren: () =>
      loadRemoteModule('login-app', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule('dashboard', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
