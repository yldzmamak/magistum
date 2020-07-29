import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DocumentDialogComponent } from 'src/app/components/document-dialog/document-dialog.component';

import { SnackbarService, DocumentService } from 'src/app/services';

import { GlobalVariables } from 'src/app/shared/variables';
import { loadingScreen } from 'src/app/utils/loading';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageSize: number = 20;
  pageIndex: number = 1;
  length: number;

  isCollapsed = false;
  dataSource = [];

  constructor(
    private documentService: DocumentService,
    private snackbarService: SnackbarService,
    public dialog: MatDialog,
  ) {
    this.pageSize = 20;
  }

  ngOnInit(): void {
    this.event.pageSize = this.pageSize;
    this.event.pageIndex = this.pageIndex;
    this.getUserDocuments(event);
  }

  event: any = {};
  nzPageIndexChange(pageIndex: number) {
    this.event.pageIndex = pageIndex;
    this.getUserDocuments(this.event);
  }

  nzPageSizeChange(pageSize: number) {
    this.event.pageSize = pageSize;
    this.getUserDocuments(this.event);
  }

  getUserDocuments(event) {
    loadingScreen('show');
    this.documentService.getUserDocuments(event).subscribe(
      (res: any) => {
        if (res.success) {
          loadingScreen('hide');
          this.dataSource = res.data.items;
          this.pageSize = res.data.page_size;
          this.length = res.data.item_count - this.pageSize;
          setTimeout(() => {
            this.scroll();
          }, 100);
        } else {
          loadingScreen('hide');
          this.snackbarService.openSnackBar(res.Message);
        }
      },
      (_error) => {
        loadingScreen('hide');
        this.snackbarService.openSnackBar(GlobalVariables.messageError);
      },
    );
    return event;
  }

  openDocumentDialog(row: any): void {
    this.dialog.open(DocumentDialogComponent, {
      data: row,
      width: '800px',
      height: '500px',
      autoFocus: false,
    });
  }

  scroll() {
    const classArr: any = document.querySelectorAll('.layout');
    classArr.forEach((element: Element) => {
      element.scrollIntoView(true);
    });
  }
}
