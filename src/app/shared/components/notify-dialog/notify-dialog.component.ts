import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-notify-dialog',
  templateUrl: './notify-dialog.component.html',
  styleUrls: ['./notify-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifyDialogComponent implements OnInit, OnDestroy {

  @Input() data: any;
  public dialogData: any = { title: 'Notification', text: '' }; // holds message to display
  constructor(public modal: NgbActiveModal, private cdr: ChangeDetectorRef) {
    this.dialogData = this.data;
    this.cdr.detectChanges();
  }

  ngOnInit() {
    if (this.data) {
      this.dialogData = this.data;
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy() {
    if (this.cdr) {
      this.cdr.detach();
    }
  }
}
