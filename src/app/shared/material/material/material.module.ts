import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTabsModule,
    MatExpansionModule
  ], exports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
