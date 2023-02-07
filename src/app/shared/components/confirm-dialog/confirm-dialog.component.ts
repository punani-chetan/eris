// Extrenal imports
import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {

  @Input() data: any;
  public dialogData: any = { title: 'Confirmation', text: 'Are you sure ?',  isIconShow: false };
  constructor(public modal: NgbActiveModal, private cdr: ChangeDetectorRef) {
    this.dialogData = this.data;
    // this.cdr.detectChanges();
  }

  ngOnInit() {
    if (this.data) {
      this.dialogData = this.data;
      this.cdr.detectChanges();
    }
  }
  ngOnDestroy(): void {
    if (this.cdr) {
      this.cdr.detach();
    }
  }
}
