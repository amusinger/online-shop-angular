import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    ProfileRoutingModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
