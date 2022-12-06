import { DeviceComponent } from './device/device.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './error/error.component';
import { Route } from '@angular/router';

const routers: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'device',
    component: DeviceComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

export {
  routers
}