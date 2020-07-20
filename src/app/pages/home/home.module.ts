import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import { SidebarComponent } from 'src/app/layouts/sidebar/sidebar.component';

import { HomeRoutingModule } from './home-routing.module';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { DocumentService } from 'src/app/services';

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
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [HomeComponent, SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DocumentService],
})
export class HomeModule {}
