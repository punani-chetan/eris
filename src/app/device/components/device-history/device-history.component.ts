import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import * as moment from 'moment';
// import  'moment-timezone';
import { MessageService } from 'src/app/shared/services/message.service';

export interface Device {
  id: number;
  name: string;
  mac: number;
  type: string;
  pi: number;
}

const ELEMENT_DATA: Device[] = [
  {id: 1, name: 'abc1',mac:12344, type:'Flow Meter', pi: 0},
  {id: 2, name: 'abc2',mac:12344, type:'Flow Meter', pi: 10},
  {id: 3, name: 'abc3',mac:12344, type:'Energy Meter', pi: 4},
  {id: 4, name: 'abc4',mac:12344, type:'Flow Meter', pi: 6},
  {id: 5, name: 'abc5',mac:12344, type:'Energy Meter', pi: 9},
  {id: 6, name: 'abc6',mac:12344, type:'Energy Meter', pi: 11},
  {id: 7, name: 'abc7',mac:12344, type:'Flow Meter', pi: 13},
  {id: 8, name: 'abc8',mac:12344, type:'Energy Meter', pi: 22},
  {id: 9, name: 'abc9',mac:12344, type:'Energy Meter', pi: 25},
  {id: 10, name: 'abc10',mac:12344, type:'Flow Meter', pi: 7},
  {id: 11, name: 'abc11',mac:12344, type:'Energy Meter', pi: 8},
  {id: 12, name: 'abc12',mac:12344, type:'Flow Meter', pi: 13},
  {id: 13, name: 'abc13',mac:12344, type:'Flow Meter', pi: 12},
  {id: 14, name: 'abc14',mac:12344, type:'Energy Meter', pi: 13},
  {id: 15, name: 'abc15',mac:12344, type:'Energy Meter', pi: 14},
  {id: 16, name: 'abc16',mac:12344, type:'Flow Meter', pi: 19},
  {id: 17, name: 'abc17',mac:12344, type:'Energy Meter', pi: 21},
  {id: 18, name: 'abc18',mac:12344, type:'Energy Meter', pi: 26},
  {id: 19, name: 'abc19',mac:12344, type:'Flow Meter', pi: 28},
  {id: 20, name: 'abc20',mac:12344, type:'Flow Meter', pi: 31},
  {id: 21, name: 'abc21',mac:12344, type:'Energy Meter', pi: 39},
  {id: 22, name: 'abc22',mac:12344, type:'Flow Meter', pi: 48},
  {id: 23, name: 'abc23',mac:12344, type:'Energy Meter', pi: 35},
  {id: 24, name: 'abc24',mac:12344, type:'Energy Meter', pi: 40},
  {id: 25, name: 'abc25',mac:12344, type:'Flow Meter', pi: 50},
  {id: 26, name: 'abc26',mac:12344, type:'Energy Meter', pi: 55},
];
@Component({
  selector: 'app-device-history',
  templateUrl: './device-history.component.html',
  styleUrls: ['./device-history.component.scss']
})
export class DeviceHistoryComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('a') a: ElementRef;
  public mobileView = true;
  @ViewChild(MatSort) sort: MatSort;
  public historyForm: FormGroup;
  public historyDetails: any = {};
  public deviceList: Array<any> = [];
  public currentDate = new Date();
  displayedColumns: string[] = ['name', 'mac', 'type', 'pi'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  emailInput: boolean = false;
  constructor(
    private messageService: MessageService,
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    private cdr: ChangeDetectorRef) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy

  }
  async search() {
    try {
      localStorage.setItem('DeviceHistory', JSON.stringify(this.historyForm.value));
      var startDate = new Date(this.historyForm.value.startDate);
      startDate.setDate(startDate.getDate() + 1);
      var endDate = new Date(this.historyForm.value.endDate);
      endDate.setDate(endDate.getDate() + 1);
      // const data = await this.deviceService.getDeviceHistory(this.historyForm.value.device, { startDate, endDate });
      // if (data.data) {
      //   for (const iterator of data.data) {
      //     iterator.valveCurrentstate = iterator.valveCurrentstate ? 'online' : 'offline';
      //     iterator.pumpCurrentstate = iterator.pumpCurrentstate ? 'online' : 'offline';
      //     iterator.pstate = iterator.pstate === 1 ? 'online' : 'offline';
      //     iterator.vstate = iterator.vstate === 1 ? 'online' : 'offline';
      //     iterator.flowValue = iterator.flowValue + ' ' + iterator.flowUnit;
      //     const date = iterator.date;
      //     iterator.date = date.split('T')[0];
      //     iterator.time = date.split('T')[1].split('.')[0];
      //   }
      // }
      // this.dataSource.data = data.data;
    } catch (error) {
      this.messageService.showMessage({ message:' error?.message', type: 'error' });
    }
  }

  async getDeviceList() {
    try {
      // const data = await this.deviceService.getDevice();
      // this.deviceList = data.data;
      this.deviceList = ['a','b','c','d','e','f','g','h','i']
      this.cdr.detectChanges();
    } catch (error) {
      this.messageService.showMessage({ message: 'error?.message', type: 'error' });
    }
  }

  private initHistoryForm(historyDetails: any): void {
    this.historyForm = this.fb.group({
      startDate: [historyDetails?.startDate, Validators.required],
      endDate: [historyDetails?.endDate, Validators.required],
      device: [historyDetails?.device, Validators.required],
      email: ['']
    });
  }
  public doNotAllow(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  }

  public fileExport() {
    var startDate = new Date(this.historyForm.value.startDate);
    startDate.setDate(startDate.getDate());
    var endDate = new Date(this.historyForm.value.endDate);
    endDate.setDate(endDate.getDate() + 1);
    // this.a.nativeElement.href = 'http://144.126.149.174:8000/api/v1/sys/manage/download/history?deviceId=' + this.historyForm.value.device + '&startDate=' + moment(startDate).format('YYYY-MM-DD') + '&endDate=' + moment(endDate).format('YYYY-MM-DD');
    this.a.nativeElement.click();
    this.messageService.showMessage({ message: 'File Downloaded Successfully', type: 'success' });
  }
  public sendEmail() {
    // this.emailInput = false;
    // this.historyForm.get('email')?.setValidators([Validators.required, Validators.email,
    // Validators.pattern(/^[a-zA-Z0-9][-a-zA-Z0-9.!#$%&'*+-=?^_`{|}~\/]+@([-a-zA-Z0-9]+\.)+[a-zA-Z]{2,5}$/)]);
    // this.historyForm.get('email')?.updateValueAndValidity();
    // this.sendMail();
  }
  async sendMail() {
    try {
      var startDate = new Date(this.historyForm.value.startDate);
      startDate.setDate(startDate.getDate());
      var endDate = new Date(this.historyForm.value.endDate);
      endDate.setDate(endDate.getDate() + 1);
      // const data = await this.deviceService.sendEmail(this.historyForm.value.device, moment(startDate).format('YYYY-MM-DD'), moment(endDate).format('YYYY-MM-DD'), { email: this.historyForm.value.email });
      this.messageService.showMessage({ message: 'Mail Sent Successfully', type: 'success' });
      this.historyForm.patchValue({ email: '' });
      this.historyForm.get('email')?.setValidators([]);
      this.historyForm.get('email')?.updateValueAndValidity();
    } catch (error) {
      this.messageService.showMessage({ message: 'error?.message', type: 'error' });
    }
  }

  ngOnInit(): void {
   this.initHistoryForm(this.historyDetails);
    window.addEventListener("resize", (event) => {
      if (document.body.clientWidth <= 990) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    });
    this.mobileView = document.body.clientWidth <= 990 ? true : false;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy(): void {
    this.cdr.detach();
  }
}
