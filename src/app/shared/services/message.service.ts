import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastrService: ToastrService) { }
  /**
 * This is  used to show toaster messages
 * @param data for passing message & type
 */
  public showMessage(data: Config): void {
    if (data.type === 'success') {
      this.toastrService.success(data.message);
    } else if (data.type === 'error') {
      this.toastrService.error(data.message);
    } if (data.type === 'info') {
      this.toastrService.info(data.message);
    } if (data.type === 'warning') {
      this.toastrService.warning(data.message);
    }
  }
  /**
 * This is  used to clear all toastr messages.
 * @param data for passing message & type
 */
  public hideMessage(): void {
    this.toastrService.clear();
  }
}
export interface Config {
  type: string,
  message: string;
};