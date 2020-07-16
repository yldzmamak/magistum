import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalDefinitions } from '../shared/global-definitions';
import { loadingScreen } from '../utils/loading';
import { SnackbarService } from './snackbar.service';
import { ResponseModel } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  login(username: string, password_hash: string) {
    console.log(username);
    loadingScreen('show');
    this.http
      .post<any>(GlobalDefinitions.login, { username, password_hash })
      .subscribe(
        (res: ResponseModel) => {
          if (res.success) {
            localStorage.setItem('token', res.data);
            this.router.navigateByUrl('/home');
            loadingScreen('hide');
          } else {
            loadingScreen('hide');
            this.snackbarService.openSnackBar(res.message);
          }
        },
        (_error) => {
          loadingScreen('hide');
          this.snackbarService.openSnackBar(GlobalDefinitions.messageError);
        },
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }

  silentLogin() {}

  logout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }
}
