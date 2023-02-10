import { Injectable } from '@angular/core';
import { CommonAPIService } from 'src/app/shared/services/common-api.service';
import { APINAME } from '../constants/dashboard.constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private commonApiService: CommonAPIService) { }

  public getDeviceCount(): Promise<any> {
    return this.commonApiService.getPromiseResponse({ apiName: APINAME.GET_ALL_DEVICE_COUNT, methodType: 'get', showLoading: false });
  }
  public getDeviceById(id: string): Promise<any> {
    return this.commonApiService.getPromiseResponse({ apiName: APINAME.GET_DEVICE + '/' + id, methodType: 'get', showLoading: false });
  }
  public getDevice(): Promise<any> {
    return this.commonApiService.getPromiseResponse({ apiName: APINAME.GET_DEVICE, methodType: 'get', showLoading: false });
  }
  // public pumpOperation(data): Promise<any> {
  //   return this.commonApiService.getPromiseResponse({ apiName: APINAME.PUMP_OPERATION, methodType: 'put', parameterObject: data });
  // }
  // public getTotalizer(id, type): Promise<any> {
  //   const queryParams = '?deviceId=' + id + '&type=' + type;
  //   return this.commonApiService.getPromiseResponse({ apiName: APINAME.GET_TOTALIZER + queryParams, methodType: 'get', showLoading: false })
  // }
  public sendEmail(data: any): Promise<any> {
    return this.commonApiService.getPromiseResponse({ apiName: APINAME.SEND_GRAPH_EMAIL, methodType: 'post', parameterObject: data })
  }
}
