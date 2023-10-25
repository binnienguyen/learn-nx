import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import {FormsModule} from "@angular/forms";
import {NzMenuModule} from "ng-zorro-antd/menu";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    NzSwitchModule,
    FormsModule,
    NzMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
