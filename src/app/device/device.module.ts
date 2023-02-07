import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DeviceHistoryComponent } from './components/device-history/device-history.component';
import { OtaComponent } from './components/ota/ota.component';
import { TotalizerReportComponent } from './components/totalizer-report/totalizer-report.component';
import { ListDeviceComponent } from './components/list-device/list-device.component';
import { DeviceRoutingModule } from './device-routing.module';

import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [ 
    AddDeviceComponent, 
    DeviceHistoryComponent, 
    OtaComponent, 
    TotalizerReportComponent, 
    ListDeviceComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    NgbModule,
    SharedModule,
    MatStepperModule
  ],
  providers: []
})
export class DeviceModule { }