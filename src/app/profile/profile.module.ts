import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    ProfileRoutingModule,
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
