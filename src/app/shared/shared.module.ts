// Extrenal imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
// Internal imports
import { SharedRoutingModule } from './shared-routing.module';
import { NotifyDialogComponent } from './components/notify-dialog/notify-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DialogService } from './services/dialog.service';


@NgModule({
  declarations: [
    NotifyDialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, FormsModule],
  providers: [DialogService]
})
export class SharedModule { }
