// External Imports
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Internal Imports
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { NotifyDialogComponent } from '../components/notify-dialog/notify-dialog.component';

@Injectable()
export class DialogService {
    constructor(private modalService: NgbModal) { }
    //hold defalut configuration of dialog  
    private dialogConfiguration = { keyboard: false, backdrop: false, size: 'lg' };

    /**
     * This is  used to open confirmation dialog
     * @param dialogData for passing dynamic data
     * @param config dialog configuration
     */
    public confirm(dialogData: any, config?: any) {
        if (config === undefined || config === null) {
            config = this.dialogConfiguration;
        }
        const modalRef = this.modalService.open(ConfirmDialogComponent, config);
        modalRef.componentInstance.data = dialogData;
        return modalRef;
    }

    /**
     * his is  used to open notify dialog
     * @param dialogData for passing dynamic data
     * @param config dialog configuration
     */
    public notify(dialogData: any, config: any) {
        if (config === undefined || config === null) {
            config = this.dialogConfiguration;
        }
        const modalRef = this.modalService.open(NotifyDialogComponent, config);
        modalRef.componentInstance.data = dialogData;
        return modalRef;
    }

    /**
     * This is used to open custom dialog
     * @param component compoment that need to be paased
     * @param dialogData for passing dynamic data
     * @param config dialog configuration
     */
    public custom(component: any, dialogData: any, config: any) {
        if (config === undefined || config === null) {
            config = this.dialogConfiguration;
        }
        const modalRef = this.modalService.open(component, config);
        modalRef.componentInstance.data = dialogData;
        return modalRef;
    }

}