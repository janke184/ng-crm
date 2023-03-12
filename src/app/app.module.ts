import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerComponent } from './main-container/main-container.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrmContainerComponent } from './crm-container/crm-container.component';
import { DashboardComponent } from './dashboard/dashboard.component'

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatDialogModule } from '@angular/material/dialog';
import { BackendService } from './services/backend.service';
import { NotificationService } from './services/notification.service';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    LoginComponent,
    CrmContainerComponent,
    DashboardComponent
  ],
  imports: [
      BrowserModule
    , AppRoutingModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatFormFieldModule
    , MatButtonModule
    , MatInputModule
    , HttpClientModule
    , ReactiveFormsModule
    , FormsModule
    , MatToolbarModule
    , MatChipsModule
    , MatIconModule
    , MatSidenavModule
    , MatListModule
    , MatDialogModule
    , MatSnackBarModule
    , TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    BackendService,
    NotificationService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}