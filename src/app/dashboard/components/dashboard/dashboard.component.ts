import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '../../../shared/services/dialog.service';
import { MessageService } from '../../../shared/services/message.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{
  public deviceType = '';
  public mobileView = false;
  public deviceDetails: any = {};
  public countDetails: any = {
    Total: 0,
    Unconfigured: 0,
    Online: 0,
    Offline: 0
  };
  public deviceTypeList: Array<any> = [
    {key: 'Select Device Type', value:''},
    {key: 'Flow Meter', value:'flowMeter'},
    {key: 'Energy Meter', value:'energyMeter'}
  ];
  public deviceNameList: Array<any> = ['Select Device By Name'];
  public deviceListFlowMeter: Array<any> = ['Flow Meter 1','Flow Meter 2','Flow Meter 3'];
  public deviceListEnergyMeter: Array<any> = ['Energy Meter 1','Energy Meter 2','Energy Meter 3','Energy Meter 4'];
  public device: string = '';
  public deviceTypeIsSelected: string = '';
  public selectDisabled: boolean = true;

  constructor(
    private messageService: MessageService,
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private dialogService: DialogService,
    private _formBuilder: FormBuilder
  ) {}

  async getDeviceCount() {
    try {
      const data = await this.dashboardService.getDeviceCount();
      this.countDetails = data?.data;
      this.cdr.detectChanges();
    } catch (error) {
      // this.messageService.showMessage({ message: error?.message, type: 'error' });
    }
  }

  async getDeviceById(id: string) {
    try {
      const data = await this.dashboardService.getDeviceById(id);
      this.deviceDetails = data?.data;
     
      this.cdr.detectChanges();
    } catch (error) {
      // this.messageService.showMessage({ message: error?.message, type: 'error' });
    }
  }

  selectedDeviceType(event: any) {
    this.deviceTypeIsSelected = (event.target as HTMLTextAreaElement).value;
    console.log(this.deviceTypeIsSelected);

    if(this.deviceTypeIsSelected === 'flowMeter') {
      this.selectDisabled = false;
      this.deviceNameList = this.deviceListFlowMeter;
    } else if(this.deviceTypeIsSelected === 'energyMeter') {
      this.selectDisabled = false;
      this.deviceNameList = this.deviceListEnergyMeter;
    } else {
      this.selectDisabled = true;
      this.deviceNameList = ['Select Device By Name'];
    }
  }

  ngOnInit(): void {
    window.addEventListener("resize", (event) => {
      if (document.body.clientWidth <= 990) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    });
    this.mobileView = document.body.clientWidth <= 990 ? true : false;
  }

  ngAfterContentInit(): void {
    
  }
}
