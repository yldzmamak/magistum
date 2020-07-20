import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AuthService } from 'src/app/services';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from 'src/app/layouts/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [HomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
  ],
  exports: [HomeComponent, SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService],
})
export class HomeModule {}
