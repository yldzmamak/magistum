import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
  },
];

export const SidebarRoutingModule = RouterModule.forRoot(routes, {
  onSameUrlNavigation: 'reload',
});
