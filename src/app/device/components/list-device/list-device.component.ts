import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { AddDeviceComponent } from '../add-device/add-device.component';

export interface Device {
  id: number;
  name: string;
  mac: number;
  type: string;
  pi: number;
}

let ELEMENT_DATA: Device[] = [
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
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss'],
})



export class ListDeviceComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'mac', 'type', 'pi', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  public mobileView = false;

  public deviceType = '';
  public deviceTypeIsSelected: string = '';
  public deviceTypeList: Array<any> = [
    {key:'Select Device Type', value: ''},
    {key: 'All', value:'All'},
    {key: 'Flow Meter', value:'Flow Meter'},
    {key: 'Energy Meter', value:'Energy Meter'}
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private dialogService: DialogService) {}

  selectedDeviceType(event: any) {
    this.deviceTypeIsSelected = (event.target as HTMLTextAreaElement).value;
    if(this.deviceTypeIsSelected === 'Flow Meter') {
      this.dataSource.filter = this.deviceTypeIsSelected;
    } else if (this.deviceTypeIsSelected === 'Energy Meter') {
      this.dataSource.filter = this.deviceTypeIsSelected;
    } else if (this.deviceTypeIsSelected == 'All'){
      this.dataSource.filter = ''
    }
  }

  public addDevice(): void {
    
      this.dialogService.custom(AddDeviceComponent, {}, { 'keyboard': false, 'backdrop': false, 'size': 'xl' }).result.then((result) => {
        // this.getDeviceList();
      }, (error) => {
        console.log(error);
      });

  }

  public updateDevice(data: any) {
 
    this.dialogService.custom(AddDeviceComponent, { id: data._id }, { 'keyboard': false, 'backdrop': false, 'size': 'xl' }).result.then((result) => {
      console.log(data.id);
    }, (error) => {
      console.log(error);
    });
 
}

public deleteDevice(data: any) {

    this.dialogService.confirm({ type: 'delete', title: 'Confirmation', text: 'Are You Sure ?' }, { 'keyboard': false, 'backdrop': false, 'size': 'md' }).result.then((res) => {
      console.log(data.id);
      
    });
 
}

public scheduleDevice(data: any) {
  
      this.dialogService.confirm({ type: 'notify', title: 'Schedule', text: 'Are You Sure ?' }, { 'keyboard': false, 'backdrop': false, 'size': 'md' }).result.then((result) => {
        console.log(data.id);
      }, (error) => {
        console.log(error);
      });
   
  
}

async factoryResetDevice(data: any) {
 
    
      this.dialogService.confirm({ type: 'attention', title: 'Factory', text: 'Are You Sure ?' }, { 'keyboard': false, 'backdrop': false, 'size': 'md' }).result.then((result) => {
        console.log(data.id);
      }, (error) => {
        console.log(error);
      });
   
  
}


  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    window.addEventListener("resize", (event) => {
      if (document.body.clientWidth <= 550) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    });
    this.mobileView = document.body.clientWidth <= 550 ? true : false;

    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
} 
