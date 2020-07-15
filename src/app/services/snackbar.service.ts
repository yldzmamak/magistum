import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig,
} from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: any) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.panelClass = 'snackBar';
    config.duration = 2000;
    this.snackBar.open(message, 'X', config);
  }
}
