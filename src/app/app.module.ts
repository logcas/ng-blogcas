import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoglistComponent } from './components/loglist/loglist.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogItemComponent } from './components/log-item/log-item.component';
import { LogsComponent } from './pages/logs/logs.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticleComponent } from './pages/article/article.component';
import { LoginComponent } from './pages/backstage/login/login.component';

import { BackstageService } from './services/backstage.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    ProfileComponent,
    LoglistComponent,
    FooterComponent,
    LogItemComponent,
    LogsComponent,
    AboutComponent,
    ArticleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    BackstageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
