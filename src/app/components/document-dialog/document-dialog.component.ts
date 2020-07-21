import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-document-dialog',
  templateUrl: './document-dialog.component.html',
  styleUrls: ['./document-dialog.component.scss'],
})
export class DocumentDialogComponent implements OnInit {
  data: any = null;
  isPhoto: boolean = false;
  isVideo: boolean = false;
  isDocument: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<DocumentDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.data = this.dialogData;
    this.data.type == 'image/jpeg' ||
    this.data.type == 'image/png' ||
    this.data.type == 'image/webp'
      ? (this.isPhoto = true)
      : this.data.type == 'video/mp4' || this.data.type == 'audio/wav'
      ? (this.isVideo = true)
      : (this.isDocument = true);
  }

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
}
