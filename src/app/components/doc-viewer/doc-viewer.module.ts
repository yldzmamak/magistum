import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocViewerComponent } from './doc-viewer.component';

import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  declarations: [DocViewerComponent],
  imports: [CommonModule, NgxDocViewerModule],
  exports: [DocViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DocViewerModule {}
