import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalDefinitions } from '../shared/global-definitions';
import { loadingScreen } from '../utils/loading';
import { SnackbarService } from './snackbar.service';
import { ResponseModel } from '../models/response';
import { GlobalVariables } from '../shared/variables';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    }),
    // withCredentials: false
  };

  login(username: string, password_hash: string) {
    console.log(username);
    loadingScreen('show');
    this.httpClient
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
          this.snackbarService.openSnackBar(GlobalVariables.messageError);
        },
      );
  }

  getUserData() {
    return this.httpClient.get(GlobalDefinitions.userData, this.httpOptions);
  }

  logout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
