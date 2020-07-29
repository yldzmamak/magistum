import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconModule } from '@ant-design/icons-angular';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    NzLayoutModule,
    NgZorroAntdModule,
    NzCardModule,
    NzMenuModule,
    NzIconModule,
    IconModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
