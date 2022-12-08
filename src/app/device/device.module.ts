import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routers } from './device.router';

@NgModule({
  imports:[RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class DeviceModule { }
