import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { RouterModule } from '@angular/router';
import { SnackbarService } from './services';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { NgZorroAntdModule, tr_TR, NZ_I18N, NZ_ICONS } from 'ng-zorro-antd';
import { TabBarComponent } from 'src/app/components/tab-bar/tab-bar.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { IconModule } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];
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
    NgZorroAntdModule,
    NzIconModule,
    IconModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SnackbarService,
    { provide: NZ_I18N, useValue: tr_TR },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
