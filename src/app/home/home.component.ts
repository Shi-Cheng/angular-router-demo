import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  student: Array<any> = [];
  constructor(
    private router: Router
  ) {}

  jump() {
    this.router.navigateByUrl("/device");
  }
}
