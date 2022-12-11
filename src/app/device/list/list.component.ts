import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceServiceComponent } from '../device.service';

@Component({
  selector: 'device-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  deviceList: Array<any> = [];

  constructor(private router: Router,
    private deviceService: DeviceServiceComponent) {}

  ngOnInit(): void {
    this.deviceList = this.deviceService.getDeviceList();
    console.log(this.deviceService.getDeviceList());
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

  addDevice() {
    this.router.navigateByUrl('device/add');
  }
}
