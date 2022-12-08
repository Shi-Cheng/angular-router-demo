import { Route } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import {NotFoundComponent} from '../error/error.component'
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
    path: ':id',
    component: DetailComponent
  },
  {
    path: 'add',
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
