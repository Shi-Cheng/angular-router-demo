import { Component } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.url
  }
}
