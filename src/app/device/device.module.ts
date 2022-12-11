import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routers } from './device.router';
import { ListComponent } from './list/list.component';
import { AddDeviceComponent } from './add/add.component';
import { DeviceServiceComponent } from './device.service';

@NgModule({
  declarations:[
    ListComponent,
    AddDeviceComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routers)],
  exports: [RouterModule],
  providers: [DeviceServiceComponent]
})
export class DeviceModule { }
