import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { UsersGridComponent } from './grid/users-grid.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [UsersComponent, UsersGridComponent, AddUserComponent],
  imports: [
    TenantsRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSortModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    SharedModule,
  ],
})
export class UsersModule {}
