/* Vendor Module Begin */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'login',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
