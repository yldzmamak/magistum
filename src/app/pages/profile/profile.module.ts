import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProfileRoutingModule } from './profile-routing.module';

import { DocumentService } from 'src/app/services';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, NgZorroAntdModule, NzButtonModule],
  exports: [ProfileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DocumentService],
})
export class ProfileModule {}
