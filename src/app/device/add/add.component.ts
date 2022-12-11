import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceServiceComponent } from '../device.service';

@Component({
  selector: 'device-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddDeviceComponent implements OnInit{
  val: any;

  @ViewChild('deviceList', {static: true})
  deviceList: Array<any>;

  constructor(private router: Router, private deviceService: DeviceServiceComponent){
    this.deviceList = [];
  }

  ngOnInit(): void {
    this.val = 'default';
  }

  add() {
    this.deviceService.addDeviceList(this.val);
    this.val = '';
    this.getDeviceList();
  }
  goBack() {
    this.router.navigateByUrl('device');
  }

  getDeviceList() {
    console.log(this.deviceService.getDeviceList());
  }
}
