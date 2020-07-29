import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponseModel, User } from 'src/app/models';
import { AuthService, SnackbarService } from 'src/app/services';

import { loadingScreen } from 'src/app/utils/loading';
import { GlobalVariables } from 'src/app/shared/variables';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  user: any = new User();

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

  getProfileInformation() {
    loadingScreen('show');

    this.authService.getUserData().subscribe(
      (res: ResponseModel) => {
        if (res.success) {
          loadingScreen('hide');
          this.user = res.data;
          localStorage.setItem('userInformation', JSON.stringify(this.user));
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
