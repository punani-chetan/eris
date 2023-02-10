import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ota',
  templateUrl: './ota.component.html',
  styleUrls: ['./ota.component.scss'],
})

export class OtaComponent implements OnInit {
  public deviceList: Array<any> = [];
  public urlList: Array<any> = [];
  public device: any;
  public mobileView = false;
  public otaForm: FormGroup;
  public pumpSelected = false;
  public valveSelected = false;
  public formSubmitted = false;
  public deleteFile = '';
  public userRole = 'Client';
  fileList: any;
  public isPump = false;
  public isValve = false;
  public isDevice = false;

  constructor(
    private messageService: MessageService,
    private cdr: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private location: Location,
    private dialogService: DialogService) {
    
  }

  async getDeviceList() {
    try {
      // const data = await this.deviceService.getDevice();
      // this.deviceList = data.data;
      this.otaForm.reset();
    } catch (error) {
      // this.messageService.showMessage({ message: 'error?.message', type: 'error' });
    }
  }
  public cancel(): void {
    // this.location.back();
  }
  // convenience getter for easy access to form fields
  get f() { return this.otaForm.controls; }

  private initOTAForm(): void {
    this.otaForm = this._formBuilder.group({
      device: ['', Validators.required],
      type: ['', Validators.required],
      pmac: [''],
      vmac: [''],
      url: ['', Validators.required]
    });
  }

  async getDeviceById() {
    // try {
    //   const data = await this.deviceService.getDeviceById(this.otaForm.value.device);
    //   if (data.data) {
    //     this.device = data.data;
    //     this.isDevice = true;
    //     if (data.data.pstate === 1) {
    //       this.isPump = true;
    //     } else {
    //       this.isPump = false;
    //     }
    //     if (data.data.vstate === 1) {
    //       this.isValve = true;
    //     } else {
    //       this.isValve = false;
    //     }
    //     this.cdr.detectChanges();
    //   }
    // } catch (error) {
    //   this.messageService.showMessage({ message: error?.message, type: 'error' });
    // }
  }
  public deleteFiles() {
    // if (this.userRole === 'Admin') {
    //   this.dialogService.confirm(
    //     { type: 'delete', title: 'Confirmation', text: 'Are You Sure You Want To Delete?' },
    //     { 'keyboard': false, 'backdrop': false, 'size': 'md' }).result.then((res) => {
    //       this.deleteSelectedFile(this.deleteFile);
    //     },
    //       () => {
    //         this.deleteFile = null;
    //         this.cdr.detectChanges()
    //       });
    // } else {
    //   this.dialogService.confirm(
    //     { type: 'delete', title: 'Confirmation', text: 'Are You Sure You Want To Delete?' },
    //     { 'keyboard': false, 'backdrop': false, 'size': 'md' }).result.then((res) => {
    //       this.deleteFile = null;
    //       this.cdr.detectChanges()
    //     }, () => {
    //       this.deleteFile = null;
    //       this.cdr.detectChanges()
    //     });
    // }
  }
  async deleteSelectedFile() {
    //  async deleteSelectedFile(fileName) {


    // if (this.userRole === 'Admin') {
    //   try {
    //     const param = {
    //       fileName: this.deleteFile
    //     }
    //     const dt = await this.deviceService.deleteOTAFile(fileName);
    //     this.messageService.showMessage({ message: dt.message, type: 'success' });
    //     this.getUrlList();
    //     this.deleteFile = '';
    //   } catch (error) {
    //     this.messageService.showMessage({ message: error?.message, type: 'error' });
    //   }
    // }
  }

  async getUrlList() {
    // try {
    //   const data = await this.deviceService.getUrl();
    //   this.urlList = data.data;
    //   this.urlList.shift();
    //   this.fileList = this.urlList;
    //   this.cdr.detectChanges();
    //   this.otaForm.reset();
    // } catch (error) {
    //   this.messageService.showMessage({ message: error?.message, type: 'error' });
    // }
  }

  async submitOTAForm() {
    // if (this.userRole === 'Admin') {
    //   this.formSubmitted = true;
    //   try {
    //     if (this.otaForm.valid) {
    //       const otaDetails = {};
    //       if (this.otaForm.value.type == 'pump') {
    //         otaDetails['pmac'] = this.device.pmac;
    //       }
    //       if (this.otaForm.value.type == 'valve') {
    //         otaDetails['vmac'] = this.device.vmac;
    //       }
    //       if (this.otaForm.value.url) {
    //         otaDetails['url'] = this.otaForm.value.url;
    //       }
    //       const d = await this.deviceService.OTA(otaDetails);
    //       this.messageService.showMessage({ message: d.message, type: 'success' });
    //       this.formSubmitted = false;
    //       this.cdr.detectChanges();
    //       this.otaForm.reset();
    //     }
    //   } catch (error) {
    //     this.messageService.showMessage({ message: error?.message, type: 'error' });
    //   }
    // }
  }

  public upload(): void {
    // if (this.userRole === 'Admin') {
    //   this.dialogService.custom(UploadFileComponent, {}, { 'keyboard': false, 'backdrop': true, 'size': 'm' }).result.then((result) => {
    //     this.getDeviceList();
    //     this.getUrlList();
    //     this.formSubmitted = false;
    //     this.otaForm.reset();
    //   }, (error) => {
    //     console.log(error);
    //   });
    // }
  }

  ngOnInit(): void {
    // this.userRole = localStorage.getItem('ROLE');
    this.getDeviceList();
    this.getUrlList();
    this.initOTAForm();
    window.addEventListener("resize", (event) => {
      if (document.body.clientWidth <= 575) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    });
    this.mobileView = document.body.clientWidth <= 575 ? true : false;
  }
}
