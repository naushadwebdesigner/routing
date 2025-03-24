import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { AboutComponent } from './comps/about/about.component';
import { LoginComponent } from './comps/login/login.component';
import { ContactComponent } from './comps/contact/contact.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { ProfileComponent } from './comps/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'profile/:id/:name/:email',
    component: ProfileComponent,
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
