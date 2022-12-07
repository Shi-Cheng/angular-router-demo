import { DeviceComponent } from './device/device.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './error/error.component';
import { ListComponent } from './device/list/list.component';
import { DetailComponent } from './device/detail/detail.component';
import { AddComponent } from './device/add/add.component';
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
    component: DeviceComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path: 'add',
        component: AddComponent
      }
    ]
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