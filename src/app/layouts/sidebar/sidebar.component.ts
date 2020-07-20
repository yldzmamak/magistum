import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponseModel } from 'src/app/models';
import { AuthService, SnackbarService } from 'src/app/services';

import { loadingScreen } from 'src/app/utils/loading';
import { GlobalVariables } from 'src/app/shared/variables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer: any;

  photo: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGMf5RLsxY1VKguLz-6s6bhYUkC3xWrAmG3Q&usqp=CAU';

  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.getProfileInformation();
  }

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

  getProfileInformation() {
    loadingScreen('show');

    this.authService.getUserData().subscribe(
      (res: ResponseModel) => {
        if (res.success) {
          console.log(res);
        } else {
          loadingScreen('hide');
          this.snackbarService.openSnackBar(res.message);
        }
      },
      (_error) => {
        loadingScreen('hide');
        this.snackbarService.openSnackBar(GlobalVariables.messageError);
      },
    );
  }

  logout() {
    this.authService.logout();
  }
}
