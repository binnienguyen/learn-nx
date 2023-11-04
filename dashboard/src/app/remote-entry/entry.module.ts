import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzEmptyModule} from "ng-zorro-antd/empty";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import { NzSelectModule } from 'ng-zorro-antd/select';
import {FormsModule} from "@angular/forms";
import {SelectComponent} from "./select.component";
import {NzOverlayModule} from "ng-zorro-antd/core/overlay";
import {OverlayModule} from "@angular/cdk/overlay";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent, SelectComponent],
  imports: [CommonModule, NzOverlayModule, RouterModule.forChild(remoteRoutes), NzLayoutModule, NzBreadCrumbModule,
    NzDividerModule, NzTableModule, NzAvatarModule, NzIconModule, NzMenuModule, NzDropDownModule, NzEmptyModule, NzPageHeaderModule, NzSelectModule, FormsModule, OverlayModule, NzGridModule, NzInputModule, NzSpaceModule, NzButtonModule],
  providers: [OverlayModule],
})
export class RemoteEntryModule {}
