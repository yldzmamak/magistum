import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { RouterModule } from '@angular/router';
import { SnackbarService } from './services';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TabBarComponent } from 'src/app/components/tab-bar/tab-bar.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { tr_TR } from 'ng-zorro-antd/i18n';
import tr from '@angular/common/locales/tr';

registerLocaleData(tr);

@NgModule({
  declarations: [AppComponent, DashboardComponent, SidebarComponent, TabBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SnackbarService,
    { provide: NZ_I18N, useValue: tr_TR },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
