import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentDialogComponent } from './document-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DocViewerModule } from '../doc-viewer/doc-viewer.module';

@NgModule({
  declarations: [DocumentDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, DocViewerModule],
  exports: [DocumentDialogComponent],
  entryComponents: [DocumentDialogComponent],
})
export class DocumentDialogModule {}
