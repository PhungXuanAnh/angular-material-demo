import { NgModule } from '@angular/core';

import { MatNativeDateModule, MatSnackBarModule, MatIconModule } from '@angular/material';
import { MatDialogModule, MatButtonModule, MatTableModule } from '@angular/material';
import { MatPaginatorModule, MatSortModule, MatTabsModule } from '@angular/material';
import { MatCheckboxModule, MatToolbarModule, MatCard } from '@angular/material';
import { MatCardModule, MatFormField, MatFormFieldModule } from '@angular/material';
import { MatProgressSpinnerModule, MatInputModule } from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({

  imports: [
    MatTabsModule, MatDividerModule, MatSliderModule,
    MatSelectModule, MatRadioModule, MatNativeDateModule,
    MatDatepickerModule, MatSnackBarModule, MatIconModule,
    MatDialogModule, MatProgressSpinnerModule, MatButtonModule,
    MatSortModule, MatTableModule, MatTabsModule, MatCheckboxModule,
    MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule,
    MatInputModule, MatPaginatorModule
  ],
  exports: [
    MatTabsModule, MatDividerModule, MatSliderModule,
    MatSelectModule, MatRadioModule, MatNativeDateModule,
    MatDatepickerModule, MatSnackBarModule, MatIconModule,
    MatDialogModule, MatProgressSpinnerModule, MatButtonModule,
    MatSortModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatTableModule, MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule,
    MatInputModule, MatPaginatorModule
  ],

})
export class MyMaterialModule { }

