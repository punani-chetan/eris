import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DeviceHistoryComponent } from './components/device-history/device-history.component';
import { ListDeviceComponent } from './components/list-device/list-device.component';
import { OtaComponent } from './components/ota/ota.component';
import { TotalizerReportComponent } from './components/totalizer-report/totalizer-report.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'list'
  },
  {
    path: 'list', component: ListDeviceComponent
  },
  {
    path: 'add', component: AddDeviceComponent
  },
  {
    path: 'list-history', component: DeviceHistoryComponent
  },
  {
    path: 'ota', component: OtaComponent
  },
  {
    path: 'totalizer-report', component: TotalizerReportComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }