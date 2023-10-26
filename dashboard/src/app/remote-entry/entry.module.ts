import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzDividerModule} from "ng-zorro-antd/divider";

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), NzLayoutModule, NzBreadCrumbModule,
  NzDividerModule],
  providers: [],
})
export class RemoteEntryModule {}
