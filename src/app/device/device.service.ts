import { Injectable } from "@angular/core";

@Injectable()
export class DeviceServiceComponent{
    deviceList: Array<any> = [];

    addDeviceList(val: any) {
      this.deviceList.push(val);
    }

    getDeviceList(): Array<any> {
      return this.deviceList;
    }
}
