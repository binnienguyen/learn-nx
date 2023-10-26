import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { IconDefinition } from '@ant-design/icons-angular';
import {appRoutes} from './app.routes';
import {NxWelcomeComponent} from './nx-welcome.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzIconModule} from "ng-zorro-antd/icon";
import { MenuFoldOutline, MenuUnfoldOutline, AreaChartOutline, HomeOutline, LoginOutline, AppleOutline } from '@ant-design/icons-angular/icons';
import { registerLocaleData } from '@angular/common';
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';

registerLocaleData(en);

const icons: IconDefinition[] = [ MenuFoldOutline, MenuUnfoldOutline, HomeOutline, AreaChartOutline,
  LoginOutline, AppleOutline];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    NzMenuModule,
    NzLayoutModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [provideNzI18n(en_US)],
  bootstrap: [AppComponent],
})
export class AppModule {}
