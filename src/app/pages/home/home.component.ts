import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { SnackbarService, DocumentService } from 'src/app/services';

import { GlobalVariables } from 'src/app/shared/variables';
import { loadingScreen } from 'src/app/utils/loading';
import { Document } from 'src/app/models';
import { MatDialog } from '@angular/material/dialog';
import { DocumentDialogComponent } from 'src/app/components/document-dialog/document-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageEvent: PageEvent;

  displayedColumns: string[] = ['created_at', 'name', 'type', 'url'];
  dataSource = new MatTableDataSource<Document>();
  pageSize: number = 20;
  length: number;

  isCollapsed = false;
  
  constructor(
    private documentService: DocumentService,
    private snackbarService: SnackbarService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getUserDocuments(null);
    this.dataSource.paginator = this.paginator;
  }

  getUserDocuments(event?: PageEvent) {
    loadingScreen('show');
    this.documentService.getUserDocuments(event).subscribe(
      (res: any) => {
        if (res.success) {
          loadingScreen('hide');
          this.dataSource.data = res.data.items;
          this.pageSize = res.data.page_size;
          this.length = res.data.item_count;
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
}
