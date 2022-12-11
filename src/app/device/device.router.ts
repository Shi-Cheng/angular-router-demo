import { Route } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { AddDeviceComponent } from "./add/add.component";
import {NotFoundComponent} from '../error/error.component';
import { ListComponent } from "./list/list.component";
const routers: Route[] = [
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
    path: 'add',
    component: AddDeviceComponent
  },
  {
    path: ':id',
    component: DetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

export {
  routers
}
