import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Device {
  name: string;
  mac: number;
  type: string;
  rate: number;
}

const ELEMENT_DATA: Device[] = [
  {name: 'abc1',mac:12344, type:'meter', rate: 0},
  {name: 'abc2',mac:12344, type:'meter', rate: 10},
  {name: 'abc3',mac:12344, type:'meter', rate: 4},
  {name: 'abc4',mac:12344, type:'meter', rate: 6},
  {name: 'abc5',mac:12344, type:'meter', rate: 9},
  {name: 'abc6',mac:12344, type:'meter', rate: 11},
  {name: 'abc7',mac:12344, type:'meter', rate: 13},
  {name: 'abc8',mac:12344, type:'meter', rate: 22},
  {name: 'abc9',mac:12344, type:'meter', rate: 25},
  {name: 'abc10',mac:12344, type:'meter', rate: 7},
  {name: 'abc11',mac:12344, type:'meter', rate: 8},
  {name: 'abc12',mac:12344, type:'meter', rate: 13},
  {name: 'abc13',mac:12344, type:'meter', rate: 12},
  {name: 'abc14',mac:12344, type:'meter', rate: 13},
  {name: 'abc15',mac:12344, type:'meter', rate: 14},
  {name: 'abc16',mac:12344, type:'meter', rate: 19},
  {name: 'abc17',mac:12344, type:'meter', rate: 21},
  {name: 'abc18',mac:12344, type:'meter', rate: 26},
  {name: 'abc19',mac:12344, type:'meter', rate: 28},
  {name: 'abc20',mac:12344, type:'meter', rate: 31},
  {name: 'abc21',mac:12344, type:'meter', rate: 39},
  {name: 'abc22',mac:12344, type:'meter', rate: 48},
  {name: 'abc23',mac:12344, type:'meter', rate: 35},
  {name: 'abc24',mac:12344, type:'meter', rate: 40},
  {name: 'abc25',mac:12344, type:'meter', rate: 50},
  {name: 'abc26',mac:12344, type:'meter', rate: 55},
];

@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss'],
})



export class ListDeviceComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns: string[] = ['name', 'mac', 'type', 'rate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  public mobileView = false;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
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
} 
