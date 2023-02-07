import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Location } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/shared/services/message.service';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent {
  public type: string = 'Add';
  public preserveDeviceDetails: any = {};
  public id: string;
  @Input() data: any = {};
  public currentDate = new Date();
  public deviceInfoForm: FormGroup; // holds battery form details
  public deviceConfigForm: FormGroup; // holds cell form details
  // public scheduleForm: FormGroup; // holds threshold form details
  public deviceInfoSubmitted = false; // when battery form is submitted
  public deviceConfigSubmitted = false; // when cell form is submitted
  public pmac: string = '';
  public vmac: string = '';
  constructor(public modal: NgbActiveModal,
    private _formBuilder: FormBuilder,
    private location: Location,
    private messageService: MessageService,
    private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  // public checkMAC(event): void {
  //   const value = event.target.value;
  //   var rege = /([0-9a-fA-F][0-9a-fA-F]){5}([0-9a-fA-F][0-9a-fA-F])/;
  //   if (value && !rege.test(value)) {
  //     event.stopPropagation();
  //     event.preventDefault();
  //   }
  // }
  public DeviceInfo(stepper: MatStepper): void {
    this.deviceInfoSubmitted = true;
    if (this.deviceInfoForm.valid) {
      stepper.next();
    }
  }
  public deviceConfig(stepper: MatStepper): void {
    this.deviceConfigSubmitted = true;
    if (this.deviceInfoForm.valid) {
      stepper.next();
    }
  }
  // to back route
  public back(): void {
    this.location.back();
  }
  // convenience getter for easy access to form fields
  get b() { return this.deviceInfoForm.controls; }

  // convenience getter for easy access to form fields
  get c() { return this.deviceConfigForm.controls; }
  // this method is used to intialize battery info form.
  private initDeviceForm(): void {
    this.deviceInfoForm = this._formBuilder.group({
      name: ['', Validators.required],
      pmac: ['', Validators.required],
      vmac: ['', Validators.required],
      lat: [''],
      long: ['']
    });
  }
  // this method is used to intialize cell info form.
  private initCellInfoForm(): void {
    this.deviceConfigForm = this._formBuilder.group({
      operationMode: ['manual'],
      threshold: ['', Validators.required],
      lineSize: [''],
      pipeSize: [''],
      payloadInterval: ['']
    });
  }
  private getDeviceDetails(): void {
    let data: any = {};
    data.name = this.deviceInfoForm.value.name;
    if (this.deviceInfoForm.value.pmac && this.deviceInfoForm.value.pmac.includes(':')) {
      this.deviceInfoForm.value.pmac = this.deviceInfoForm.value.pmac.replace(/:/g, '');
    }
    if (this.deviceInfoForm.value.vmac && this.deviceInfoForm.value.vmac.includes(':')) {
      this.deviceInfoForm.value.vmac = this.deviceInfoForm.value.vmac.replace(/:/g, '');
    }
    data.pmac = this.pmac ? this.pmac : this.deviceInfoForm.value.pmac.toUpperCase();
    data.vmac = this.vmac ? this.vmac : this.deviceInfoForm.value.vmac.toUpperCase();
    data.operationMode = 'manual';
    data.threshold = this.deviceConfigForm.value.threshold;
    data.lineSize = this.deviceConfigForm.value.lineSize;
    data.pipeSize = this.deviceConfigForm.value.pipeSize;
    // ? moment(this.scheduleForm.value.startDate).format('DD/MM/YYYY') : ''
    // ? moment(this.scheduleForm.value.endDate).format('DD/MM/YYYY') : ''
    // data.startDate = this.scheduleForm.value.startDate;
    // data.endDate = this.scheduleForm.value.endDate;
    // if (this.scheduleForm.value.startTime) {
    //   if (this.scheduleForm.value.startTime.length === 5) {
    //     this.scheduleForm.value.startTime = this.scheduleForm.value.startTime + ':00'
    //   }
    // }
    // if (this.scheduleForm.value.endTime) {
    //   if (this.scheduleForm.value.endTime.length === 5) {
    //     this.scheduleForm.value.endTime = this.scheduleForm.value.endTime + ':00';
    //   }
    // }
    // data.startTime = this.scheduleForm.value.startTime ? this.scheduleForm.value.startTime : '';
    // data.endTime = this.scheduleForm.value.endTime ? this.scheduleForm.value.endTime : '';
    data.payloadInterval = this.deviceConfigForm.value.payloadInterval ? this.deviceConfigForm.value.payloadInterval : '';
    if (Object.keys(this.preserveDeviceDetails).length > 0) {
      data = this.compareObject(data);
    }
    return data;
  }
  private compareObject(newObj: any) {
    const data = {};
    for (const key in newObj) {
      for (const iterator in this.preserveDeviceDetails) {
        if (iterator === key && newObj[key] && newObj[key] !== this.preserveDeviceDetails[iterator]) {
          // data[key] = newObj[key];
        }
      }
    }
    return data;
  }

  async done() {
    try {
      const details = this.getDeviceDetails();
      
      // const data = await this.deviceService.addDevice(details);
      this.messageService.showMessage({ message: 'Hello', type: 'success' });
      this.modal.close();
      console.log(details);
    } catch (error) {
      this.messageService.showMessage({ message: 'Error', type: 'error' });
    }
  }
  async update() {
    try {
      let details = this.getDeviceDetails();
      // details['id'] = this.id;
      // const data = await this.deviceService.updateDevice(details);
      this.messageService.showMessage({ message: 'Hello', type: 'success' });
      this.modal.close();
    } catch (error) {
      this.messageService.showMessage({ message: 'Error', type: 'error' });
    }
  }
  // this method is used to intialize threshold info form.
  // private initScheduleForm(): void {
  //   this.scheduleForm = this._formBuilder.group({
  //     typeOfSchedule: [''],
  //     startDate: [''],
  //     endDate: [''],
  //     startTime: [''],
  //     endTime: [''],
  //   });
  // }
  public doNotAllow(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  }

  private setDeviceDetails(details: any): void {
    this.deviceInfoForm.patchValue({
      name: details.name,
      pmac: details.pmac,
      vmac: details.vmac,
    });
    this.deviceConfigForm.patchValue({
      threshold: details.threshold,
      lineSize: details.lineSize,
      pipeSize: details.pipeSize,
      payloadInterval: details.payloadInterval
    });
    if (details.startTime) {
      let count = 0;
      let startTime = '';
      for (const iterator of details.startTime) {
        count += 1;
        if (count <= 4) {
          startTime += iterator;
        }
        if (count === 2) {
          startTime += ':';
        }
      }
      details.startTime = startTime;
    }
    if (details.endTime) {
      let count = 0;
      let endTime = '';
      for (const iterator of details.endTime) {
        count += 1;
        if (count <= 4) {
          endTime += iterator;
        }
        if (count === 2) {
          endTime += ':';
        }
      }
      details.endTime = endTime;
    }
    // this.scheduleForm.patchValue({
    //   startDate: details.startDate,
    //   endDate: details.endDate,
    //   startTime: details.startTime,
    //   endTime: details.endTime
    // });
    this.pmac = details.pmac;
    this.vmac = details.vmac;
    // this.deviceInfoForm.controls.pmac.disable();
    // this.deviceInfoForm.controls.vmac.disable();
  }

  async getDeviceById() {
    try {
      // const data = await this.deviceService.getDeviceById(this.id);
      // this.setDeviceDetails(data.data);
      // this.preserveDeviceDetails = data.data;
    } catch (error) {
      this.messageService.showMessage({ message: 'Error', type: 'error' });
    }
  }
  ngOnInit(): void {
    this.initDeviceForm();
    this.initCellInfoForm();
    // this.initScheduleForm();
    if (this.data.id) {
      this.id = this.data.id;
      this.type = 'Edit';
      this.getDeviceById();
    }
  }

}
