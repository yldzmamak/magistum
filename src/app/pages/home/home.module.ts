import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DocumentDialogModule } from 'src/app/components/document-dialog/document-dialog.module';

import { DocumentService } from 'src/app/services';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    DocumentDialogModule,
    NgZorroAntdModule,
    NzPaginationModule,
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DocumentService],
})
export class HomeModule {}
